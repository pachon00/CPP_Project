import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  imports: [CommonModule, DataTablesModule,    NgbModule, RouterModule.forChild(DashboardRoutes)],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
