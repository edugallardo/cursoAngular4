import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import 'rxjs';
import { map } from 'rxjs/operators';
// https://victorroblesweb.es/2018/05/25/solucion-a-los-errores-con-rxjs-en-angular-6/

@Injectable()
export class PresupuestosService {

  // Nuestra url de la base de datos firebase
  presURL = 'https://comprasapp-20f96.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-20f96.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  // Recibe el objeto presupuesto, y lo recibe del componente
  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    // Enviamos http (url y demás...) y con la respuesta que se recibe del servidor, la pasamos a json y la devolvemos
    return this.http.post( this.presURL, newpres, {headers})
      .pipe(map( res => {
        console.log(res.json());
        return res.json();
      }));
        // Necesitamos usar .pipe para que funcione, con Angular 6, ya no funciona .map por sí sólo
  }

    getPresupuestos() {
      return this.http.get(this.presURL)
        .pipe(map(  // Siempre que haya un map, usaremos un .pipe
          res => res.json()
        ));
    }

    // Lectura para actualizar (modificar)
    getPresupuesto(id$: string) {
      const url = `${this.preURL}/${id$}.json`; // Nueva url, formada por la que teníamos arriba + el id del objeto
      return this.http.get(url)
        .pipe(map( res => res.json()));
    }

    putPresupuesto(presupuesto: any, id$: string) {
      const newpre = JSON.stringify(presupuesto);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      const url = `${this.preURL}/${id$}.json`;

      return this.http.put( url, newpre, {headers})
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
    }

    delPresupuesto (id$: string) {
      const url = `${this.preURL}/${id$}.json`;
      return this.http.delete( url )
        .pipe(map( res => res.json()));
    }


}
