import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1º Para controlar los formularios, se importa 'FormsModule'
import { Routes, RouterModule } from '@angular/router'; // Para añadir rutas, importamos router
import { ReactiveFormsModule } from '@angular/forms'; // 2º Segunda forma de controlar formularios
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestoComponent } from './presupuestos/presupuesto/presupuesto.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { FirebaseModule, FirebaseProvider } from 'angular-firebase';
import { AutenticacionService } from './servicios/autenticacion.service'; // Importamos nuestro servicio

// Añadimos las rutas en una constante
const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent }, // Ruta a botón que añade proveedores
  { path: 'presupuestos', component: PresupuestoComponent },
  { path: 'addpres', component: AddpresComponent },     // Control de formularios
  { path: 'editpres/:id', component: EditpresComponent }, // Para editar (modificar)
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: InicioComponent } // ** --> Cualquier ruta que no exista
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestoComponent,
    EditpresComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Usado para el control de formularios
    RouterModule.forRoot(routes), // Usado para las rutas,
    FirebaseModule,
    HttpModule
  ],
  providers: [ProveedoresService,
              PresupuestosService,
              FirebaseProvider,
              AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
