import { AdminLayoutComponent } from "./core";
import { AuthLayoutComponent } from "./core";
import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "administration",
        loadChildren: () =>
          import("./administration/administration.module").then(
            m => m.AdministrationModule
          )
      },
      {
        path: "remisiones",
        loadChildren: () =>
          import("./remisiones/remisiones.module").then(
            m => m.RemisionesModule
          )
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            m => m.AuthenticationModule
          )
      },
      {
        path: "error",
        loadChildren: () =>
          import("./error/error.module").then(m => m.ErrorModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "error/404"
  }
];
