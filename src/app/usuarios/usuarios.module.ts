import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { UsuariosRoutes } from './usuarios.routing';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioAdminComponent } from './admin/usuarioAdmin.component';

@NgModule({
  declarations: [
  UsuariosComponent,
  UsuarioAdminComponent],
  imports: [
    CommonModule,DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(UsuariosRoutes)
  ],
})
export class UsuariosModule { }
