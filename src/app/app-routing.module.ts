import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Module dependencies Component
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'agregar-empleado'},
  {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
  {path: 'listar-empleado', component:ListarEmpleadoComponent},
  {path: 'editar-empleado/:id', component:EditarEmpleadoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
