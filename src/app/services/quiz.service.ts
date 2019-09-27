import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class QuizService {

	questions: Quiz[] = [];
	quizSubject = new Subject<Quiz[]>();
	json;

	constructor() {
		this.getQuiz();
	}

	sendQuiz(){
		this.quizSubject.next(this.questions);
	}	

	saveQuiz(){
		firebase.database().ref('/quiz').set(this.questions);
	}

	getQuiz() {
		firebase.database().ref('/quiz').on(
			'value', (data: DataSnapshot) => {
				this.questions = data.val() ? data.val() : [];
				this.sendQuiz();
			}
		);
	}

	getSingleQuestion(id: number){
		return new Promise(
			(resolve, reject) => {
				firebase.database().ref('/quiz' + id).once('value').then(
					(data: DataSnapshot) => {
						resolve(data.val());
					},
					(error) => {
						reject(error);
					}
				);
			}
		);
	}

	createNewQuestion(newQuestion : Quiz) {
		this.questions.push(newQuestion);
		this.saveQuiz();
		this.sendQuiz();
	}

	removeQuestion(question: Quiz){
		const questionToRemove = this.questions.findIndex(
			(questionE1) => {
				if(questionE1 === question){
					return true;
				}
			}
		);
		this.questions.splice(questionToRemove, 1);
		this.sendQuiz();
		this.saveQuiz();
	}

}
