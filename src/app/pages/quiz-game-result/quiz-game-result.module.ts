import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizGameResultPageRoutingModule } from './quiz-game-result-routing.module';

import { QuizGameResultPage } from './quiz-game-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizGameResultPageRoutingModule
  ],
  declarations: [QuizGameResultPage]
})
export class QuizGameResultPageModule {}
