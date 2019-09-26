import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz.model';

@Component({
	selector: 'app-single-quiz',
	templateUrl: './single-quiz.component.html',
	styleUrls: ['./single-quiz.component.scss']
})
export class SingleQuizComponent implements OnInit {

	question: Quiz;

	constructor(private router: Router, private quizService: QuizService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.question = new Quiz('', false);
		const id = this.route.snapshot.params['id'];
		this.quizService.getSingleQuestion(+id).then(
			(question: Quiz) => {
				this.question = question;
			}
		);
	}

	sendToArduino(){
		//http request
	}

	onBack(){
		this.router.navigate(['/quiz']);
	}

}
