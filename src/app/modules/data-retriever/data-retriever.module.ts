import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageService} from '../../services/storage.service';
import {LoadingController} from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataRetrieverModule {

  quizDomains = [
    'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple',
    'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple',
    'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple'
  ];
  loading: any;
  constructor(private storage: StorageService, private loadingController: LoadingController) {
    this.getQuizData().then();
  }

  async getQuizData() {
    await this.presentLoading();
    const sports = await fetch(this.quizDomains[0]);
    const sportsResponse = await sports.json();
    const computer = await fetch(this.quizDomains[1]);
    const computerResponse = await computer.json();
    const animals = await fetch(this.quizDomains[2]);
    const animalsResponse = await animals.json();

    this.storage.setObject('sports', sportsResponse.results).then();
    this.storage.setObject('computers', computerResponse.results).then();
    this.storage.setObject('animals', animalsResponse.results).then();


    await this.dismissLoading();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Initializing Data',
      duration: 2000,
      backdropDismiss: false
    });
    await this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
  }
}
