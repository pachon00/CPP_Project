import { Routes } from "@angular/router";
import { UsuarioAdminComponent } from "./admin/usuarioAdmin.component";
import { UsuariosComponent } from "./usuarios.component";

export const UsuariosRoutes: Routes = [{
  path: "",
  children: [
    {
      path: "usuarios",
      component: UsuariosComponent
    },
    {
      path: "usuarios/nuevo",
      component: UsuarioAdminComponent
    },
  ]
}
];
