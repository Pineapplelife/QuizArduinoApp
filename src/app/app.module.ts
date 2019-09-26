import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { SingleQuizComponent } from './quiz/single-quiz/single-quiz.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';
import { QuizService } from './services/quiz.service';
import { ArduinoJSONComponent } from './arduino-json/arduino-json.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuizFormComponent,
    SingleQuizComponent,
    FourOhFourComponent,
    HeaderComponent,
    ArduinoJSONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
