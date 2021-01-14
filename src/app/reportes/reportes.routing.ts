import { Routes } from "@angular/router";
import { PagoProveedoresComponent } from "./pagoproveedores/pagoproveedores.component";
import { DetallePorRemisionesComponent } from "./detalleporremisiones/detalleporremisiones.component";
import { PorVencerComponent } from "./porvencer/porvencer.component";
import { RemisionesVencidasComponent } from "./vencidas/remisionesvencidas.component";

export const ReportesRoutes: Routes = [{
  path: "",
  children: [
    {
      path: "remisionesvencidas",
      component: RemisionesVencidasComponent
    },
    {
      path: "porvencer",
      component: PorVencerComponent
    },
    {
      path: "pagoproveedor",
      component : PagoProveedoresComponent
    },
    {
      path: "pagocategoria",
      component : DetallePorRemisionesComponent
    }
  ]
}
];
