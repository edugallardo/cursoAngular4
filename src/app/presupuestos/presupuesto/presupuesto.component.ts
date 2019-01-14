import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  presupuestos: any[] = [];

  constructor(private PresupuestosService: PresupuestosService) {
    this.PresupuestosService.getPresupuestos()
          .subscribe(presupuestos => {
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]);
            }
          });
  }

  ngOnInit() {
  }

  eliminarPresupuesto(id$) {
    this.PresupuestosService.delPresupuesto(id$)
      .subscribe ( res => {
        this.presupuestos = []; // Al borrar uno, aparece todo vacío y luego se rellena con el contenido del contructor
        this.PresupuestosService.getPresupuestos() // De esta forma, se actualiza la tabla
          .subscribe(presupuestos => {
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]);
            }
          });
      });
  }

}
