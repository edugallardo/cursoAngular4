import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any; // Objeto donde almacenamos los valores de cada nuevo presupuesto
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  constructor(private pf: FormBuilder,
              private presupuestoService: PresupuestosService) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
    });

    this.onChanges();
  }

  // Para los campos del formulario (presupuestoForm), recogemos los valores de base y de tipo
  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      // Con los valores recogidos, el iva va a ser la base * el tipo
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
      // Para que esto se aplique al form, tenemos que usar en cada input ngModel
    });
  }

  onSubmit() {
    this.presupuesto  = this.savePresupuesto();
    // Le mandamos al método post este presupuesto como parámetro
    this.presupuestoService.postPresupuesto(this.presupuesto)
          .subscribe(newpres => {

          });
    this.presupuestoForm.reset();
  }

  savePresupuesto() { // [Ctrl+d] = editar palabras iguales
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value,
    };
    return savePresupuesto;
  }

}
