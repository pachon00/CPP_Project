import { FormapagoComponent } from "./formapago/formapago.component";
import { Routes } from "@angular/router";
import { ProveedoresComponent } from "./proveedores/proveedores.component";
import { AdminProveedoresComponent } from "./proveedores/admin/admin.component";
import { TipoProveedorComponent } from "./tipoproveedor/tipoproveedor.component";
import { TipoProveedorAdminComponent } from "./tipoproveedor/admin/admin.component";
import { ProveedorResolver } from "../services/administration/proveedores/proveedor.resolver";
import { SucursalComponent } from "./sucursal/sucursal.component";
import { AltaSucursalComponent } from "./sucursal/alta/sucursal.component";

export const AdministartionRoutes: Routes = [{
  path: "",
  children: [
    {
      path: "formapago",
      component: FormapagoComponent
    },
    {
      path: "proveedores",
      component: ProveedoresComponent
    },
    {
      path: "proveedores/nuevo",
      component: AdminProveedoresComponent,
      resolve : {
        formaPago : ProveedorResolver
      }
    },
    {
      path: "proveedores/editar/:id",
      component: AdminProveedoresComponent,
      resolve : {
        formaPago : ProveedorResolver
      }
    },
    {
      path: "tipoproveedor",
      component: TipoProveedorComponent
    },

    {
      path: "tipoproveedor/nuevo",
      component: TipoProveedorAdminComponent
    },
    {
      path: "tipoproveedor/editar/:id",
      component: TipoProveedorAdminComponent
    },
    {
      path: "sucursal",
      component :SucursalComponent
    },
    {
      path: "sucursal/nuevo",
      component :AltaSucursalComponent
    },
    {
      path: "sucursal/editar/:id",
      component :AltaSucursalComponent
    }
  ]
}
];
