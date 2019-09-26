import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private quizService: QuizService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.quizForm = this.formBuilder.group({
      question : ['', Validators.required],
      reponse : ['', Validators.required], 
    });
  }

  onSaveQuestion(){
    const question = this.quizForm.get('question').value;
    const reponse = this.quizForm.get('reponse').value;
    const newQuestion = new Quiz(question, reponse);
    this.quizService.createNewQuestion(newQuestion);
  }

}
