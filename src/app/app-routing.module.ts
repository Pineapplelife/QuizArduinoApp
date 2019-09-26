import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { SingleQuizComponent } from './quiz/single-quiz/single-quiz.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/view/:id', component: SingleQuizComponent },
  { path: 'form', component: QuizFormComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
