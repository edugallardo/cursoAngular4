import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',  // Nombre de la etiqueta a usar en "index.html"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  destino: string = 'Gallardo';
  title = 'Edu';

  ngOnInit () { // Usamos lo siguiente para iniciar la base de datos al autenticar
    firebase.initializeApp({
      apiKey: 'AIzaSyCS8t1zde68_7xrumsw9w-QFebAqbKAcvE',
      authDomain: 'comprasapp-20f96.firebaseapp.com'
    });
  }
}
