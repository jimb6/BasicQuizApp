import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-quiz-modal',
  templateUrl: './quiz-modal.component.html',
  styleUrls: ['./quiz-modal.component.scss'],
})
export class QuizModalComponent implements OnInit {

  timer: any = 100;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    setInterval(() => {
      this.timer -= 20;
      if (this.timer === 0) {
        this.modalCtrl.dismiss();
      }
    }, 1000);
  }

}
