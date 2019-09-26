import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-arduino-json',
  templateUrl: './arduino-json.component.html',
  styleUrls: ['./arduino-json.component.scss']
})
export class ArduinoJSONComponent implements OnInit {

  json;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.arduinoWantJson();
  }

  arduinoWantJson(){
    this.json = this.quizService.getJson();
  }

}
