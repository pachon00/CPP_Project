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
        name: "Órdenes"
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
        state: "porvencer",
        name: "Pagos por vencer"
      },
      {
        state: "remisionesvencidas",
        name: "Pagos vencidos"
      },
      {
        state: "pagoproveedor",
        name: "Pago Órdenes"
      },
      {
        state: "pagocategoria",
        name: "Pago Remisiones"
      }
    ]
  },
  {
    state: "usuarios",
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
