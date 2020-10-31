import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RemisionesRoutes } from './remisiones.routing';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AltaRemisionComponent } from './remision/alta/altaremision.component';
import { RemisionesComponent } from './remision/remisiones.component';
import { AltaOrdenComponent } from './ordenes/altaorden/altaorden.component';
import { OrdenesComponent } from './ordenes/ordenes.component';


@NgModule({
  declarations: [
    AltaRemisionComponent,
    RemisionesComponent,
    OrdenesComponent,
    AltaOrdenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    RouterModule.forChild(RemisionesRoutes)
  ],
})
export class RemisionesModule { }
