import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDoywLvk29WbfhrH49v_XEfr6oIkWeL230",
      authDomain: "todoapp-2b701.firebaseapp.com",
      databaseURL: "https://todoapp-2b701.firebaseio.com"
    });
  }
}
