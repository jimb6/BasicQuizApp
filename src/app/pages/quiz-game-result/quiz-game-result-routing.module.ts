import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizGameResultPage } from './quiz-game-result.page';

const routes: Routes = [
  {
    path: '',
    component: QuizGameResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizGameResultPageRoutingModule {}
