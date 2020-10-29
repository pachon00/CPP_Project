import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormapagoComponent } from './formapago/formapago.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AdministartionRoutes } from './administration.routing';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AdminProveedoresComponent } from './proveedores/admin/admin.component';
import { TipoProveedorComponent } from './tipoproveedor/tipoproveedor.component';
import { TipoProveedorAdminComponent } from './tipoproveedor/admin/admin.component';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SucursalComponent } from './sucursal/sucursal.component';
import { AltaSucursalComponent } from './sucursal/alta/sucursal.component';

@NgModule({
  declarations: [FormapagoComponent,
                 ProveedoresComponent,
                 AdminProveedoresComponent,
                 TipoProveedorComponent,
                 TipoProveedorAdminComponent,
                SucursalComponent,
                AltaSucursalComponent
              ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    RouterModule.forChild(AdministartionRoutes)
  ]
})
export class AdministrationModule { }
