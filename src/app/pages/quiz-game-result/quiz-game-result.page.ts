import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-quiz-game-result',
  templateUrl: './quiz-game-result.page.html',
  styleUrls: ['./quiz-game-result.page.scss'],
})
export class QuizGameResultPage implements OnInit {

  score: any;
  items: any;
  constructor(private storage: StorageService) { }

  async ngOnInit() {
    const scoreRequest = await this.storage.getData('score');
    const itemsRequest = await this.storage.getData('items');
    this.score = scoreRequest.value;
    this.items = itemsRequest.value;
  }

}
