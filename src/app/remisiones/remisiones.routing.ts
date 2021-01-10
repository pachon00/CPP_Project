import { Routes } from "@angular/router";
import { AltaOrdenComponent } from "./ordenes/altaorden/altaorden.component";
import { OrdenesComponent } from "./ordenes/ordenes.component";
import { AltaRemisionComponent } from "./remision/alta/altaremision.component";
import { RemisionesComponent } from "./remision/remisiones.component";

export const RemisionesRoutes: Routes = [{
  path: "",
  children: [
    {
      path: "remisiones",
      component: RemisionesComponent
    },
    {
      path: "remisiones/nuevo",
      component: AltaRemisionComponent
    },
    {
      path: "remisiones/editar/:id",
      component: AltaRemisionComponent
    },
    {
      path: "ordenes",
      component: OrdenesComponent
    },
    {
      path: "ordenes/nuevo",
      component: AltaOrdenComponent
    },
    {
      path: "ordenes/editar/:id",
      component: AltaOrdenComponent
    },
  ]
}
];
