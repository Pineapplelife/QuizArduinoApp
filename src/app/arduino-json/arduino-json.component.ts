import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { AppComponent } from '../app.component';
import { from } from 'rxjs';

@Component({
	selector: 'app-arduino-json',
	templateUrl: './arduino-json.component.html',
	styleUrls: ['./arduino-json.component.scss']
})
export class ArduinoJSONComponent implements OnInit, OnDestroy {

	json;

	constructor(private quizService: QuizService, private appComponent: AppComponent) { }

	ngOnInit() {
		this.appComponent.arduino = true;
		this.arduinoWantJson();
	}

	arduinoWantJson() {
		this.json = this.quizService.getJson();
	}

	ngOnDestroy() {
		this.appComponent.arduino = false;
	}

}
