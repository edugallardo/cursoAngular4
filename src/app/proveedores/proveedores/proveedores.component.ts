import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';

// Cuando se inicia este componente, se llama al servicio Proveedores (línea 2)
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any;

  // proveedoresService será de la clase Proveedores, se hace siempre que se llama a un servicio
  constructor(private proveedoresService: ProveedoresService) {

  }

  ngOnInit() {
    // En esta variable, se guarda el valor del getProveedores que está en el servicio-> proveedores.service
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
