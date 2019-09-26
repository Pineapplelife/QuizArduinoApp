import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyDOhxtsDlSPh1bHOzGoGetliXPKOcEWxqI",
			authDomain: "quizarduinoapp.firebaseapp.com",
			databaseURL: "https://quizarduinoapp.firebaseio.com",
			projectId: "quizarduinoapp",
			storageBucket: "",
			messagingSenderId: "1053802078785",
			appId: "1:1053802078785:web:0edecddd60ed7d7d4ddcc0"
		};
		firebase.initializeApp(firebaseConfig);
	}

}
