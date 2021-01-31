import { AdminLayoutComponent } from "./core";
import { AuthLayoutComponent } from "./core";
import { Routes } from "@angular/router";
import { AuthGuard } from "../app/guard/auth.guard";

export const AppRoutes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "", redirectTo: "login/signin", pathMatch: "full" },
      {
        path: "login",
        loadChildren: () =>
          import("./authentication/authentication.module").then(a => a.AuthenticationModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(
            m => m.DashboardModule
          ), canActivate: [AuthGuard]
      },
      {
        path: "administration",
        loadChildren: () =>
          import("./administration/administration.module").then(
            m => m.AdministrationModule
          ), canActivate: [AuthGuard]
      },
      {
        path: "remisiones",
        loadChildren: () =>
          import("./remisiones/remisiones.module").then(
            m => m.RemisionesModule
          ), canActivate: [AuthGuard]
      },
      {
        path: "reportes",
        loadChildren: () =>
          import("./reportes/reportes.module").then(
            m => m.ReportesModule
          ), canActivate: [AuthGuard]
      },
      {
        path: "usuarios",
        loadChildren: () =>
          import("./usuarios/usuarios.module").then(
            m => m.UsuariosModule
          ), canActivate: [AuthGuard]
      },
      {
        path: "**",
        redirectTo: "error/404"
      }
    ]
  }
];
