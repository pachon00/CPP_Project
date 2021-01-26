import { DashboardComponent } from "./dashboard.component";
import { Routes } from "@angular/router";

export const DashboardRoutes: Routes = [
  {
    path: "dashboard", component: DashboardComponent,
    data: {
      heading: "Inicio"
    }
  },
  {
    path: "inicio",
    component: DashboardComponent,
    data: {
      heading: "Inicio"
    }
  }

];
