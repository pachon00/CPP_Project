import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ReportesRoutes } from './reportes.routing';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RemisionesVencidasComponent } from './vencidas/remisionesvencidas.component';
import { PorVencerComponent } from './porvencer/porvencer.component';
import { PagoProveedoresComponent } from './pagoproveedores/pagoproveedores.component';
import { DetallePorRemisionesComponent } from './detalleporremisiones/detalleporremisiones.component';

@NgModule({
  declarations: [
    RemisionesVencidasComponent,
    PorVencerComponent,
    PagoProveedoresComponent,
    DetallePorRemisionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    RouterModule.forChild(ReportesRoutes)
  ],
})
export class ReportesModule { }
