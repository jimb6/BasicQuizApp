import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizGamePageRoutingModule } from './quiz-game-routing.module';

import { QuizGamePage } from './quiz-game.page';
import {QuizModalComponent} from '../../components/quiz-modal/quiz-modal.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizGamePageRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({})
  ],
    declarations: [QuizGamePage, QuizModalComponent]
})
export class QuizGamePageModule {}
