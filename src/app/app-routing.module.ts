import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quiz-game',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: ':quizType',
        loadChildren: () => import('./pages/quiz-game/quiz-game.module').then( m => m.QuizGamePageModule)
      }
    ]
  },
  {
    path: 'quiz-game-result',
    loadChildren: () => import('./pages/quiz-game-result/quiz-game-result.module').then( m => m.QuizGameResultPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
