import { AdminLayoutComponent } from "./core";
import { AuthLayoutComponent } from "./core";
import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  { path: "", redirectTo: "login/signin", pathMatch: "full" },
  { path: "login", loadChildren: "./authentication/authentication.module#AuthenticationModule" },
  { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" },
  { path: "administration", loadChildren: "./administration/administration.module#AdministrationModule" },
  { path: "remisiones", loadChildren: "./remisiones/remisiones.module#RemisionesModule" },
  { path: "reportes", loadChildren: "./reportes/reportes.module#ReportesModule" },
  { path: "usuarios", loadChildren: "./usuarios/usuarios.module#UsuariosModule" },  
  {
    path: "**",
    redirectTo: "error/404"
  }
];
