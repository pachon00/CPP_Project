import { Injectable } from "@angular/core";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: "/",
    name: "Inicio",
    type: "link",
    icon: "basic-accelerator"
  },
  {
    state: "administration",
    name: "Administración",
    type: "sub",
    icon: "basic-webpage",
    children: [
      // {
      //   state: "formapago",
      //   name: "Forma Pago"
      // },
      {
        state: "proveedores",
        name: "Proveedores"
      },
      {
        state: "tipoproveedor",
        name: "Tipo Proveedor"
      },
      {
        state: "sucursal",
        name: "Sucursales"
      }
    ]
  },
  {
    state: "remisiones",
    name: "Remisiones",
    type: "sub",
    icon: "ecommerce-creditcard",
    children: [
      {
        state: "remisiones",
        name: "Remisiones"
      },
      {
        state: "ordenes",
        name: "Ordenes"
      },
      {
        state: "pagoremision",
        name: "Pago Ordenes"
      }
    ]
  },
  {
    state: "reportes",
    name: "Reportes",
    type: "sub",
    icon: "basic-sheet-pen",
    children: [
      {
        state: "proximosavencer",
        name: "Pagos por vencer"
      },
      {
        state: "vencidos",
        name: "Pagos vencidos"
      },
      {
        state: "pagoproveedor",
        name: "Pago Proveedores"
      },
      {
        state: "pagocategoria",
        name: "Pago Categoria"
      }
    ]
  },
  {
    state: "reportes",
    name: "Usuarios",
    type: "sub",
    icon: "basic-lock-open",
    children: [
      {
        state: "usuarios",
        name: "Usuarios"
      }
    ]
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
