import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
import {QuizModalComponent} from '../../components/quiz-modal/quiz-modal.component';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.page.html',
  styleUrls: ['./quiz-game.page.scss'],
})
export class QuizGamePage implements OnInit {
  quizData: any = [];
  modal: HTMLElement;
  currentModal: any;

  question: any;
  choices: any;
  timer = 10;
  timerInterval: any;
  score = 0;
  attempt = 0;
  currentQuestion: any;

  constructor(
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService,
    private modalCtrl: ModalController) {
  }

  async ngOnInit() {
    // await this.startQuiz();
    await this.presentModal();
    const quizCategory = await this.route.paramMap.subscribe(async params => {
      if (params.has('quizType')) {
        this.quizData = await this.storage.getObject(params.get('quizType'));
      } else {
        await this.router.navigateByUrl('/');
      }
    });
  }

  async presentModal() {
    this.currentModal = await this.modalCtrl.create({
      component: QuizModalComponent,
      cssClass: 'my-custom-class'
    });
    await this.currentModal.present();
    this.currentModal.onDidDismiss().then(() => {
      this.nextQuestion();
    });
  }

  async startQuiz() {
    clearInterval(this.timerInterval);
    this.timer = 25;
    this.timerInterval = await setInterval(() => {
      this.timer -= 1;
      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  nextQuestion() {
    if (this.quizData.length > 0) {
      this.startQuiz();
      this.currentQuestion = this.quizData.splice(Math.floor(Math.random() * this.quizData.length), 1).pop();
      this.question = this.currentQuestion.question;
      this.choices = this.currentQuestion.incorrect_answers.concat(this.currentQuestion.correct_answer).sort(()=> Math.random() - 0.5);
    } else {
      this.storage.setData('score', this.score);
      this.storage.setData('items', this.attempt);
      this.router.navigateByUrl('/quiz-game-result');
    }
  }

  checkAnswer(answer) {
    if (this.currentQuestion.correct_answer === answer) {
      this.score++;
    }
    this.attempt++;
    this.nextQuestion();
  }
}
