import { Injectable } from "@angular/core";
import { authService } from "../../services/auth/auth.service";
import { UsuarioViewModel, UsuarioAutenticado } from '../../model/usuario/usuarioAutenticado.model';

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
    state: "dashboard",
    name: "Inicio",
    type: "link",
    icon: "basic-accelerator",
    children: [
      {
        state: "inicio",
        name: "Inicio"
      },
    ]
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

const MENUITEMSUSER = [
  {
    state: "dashboard",
    name: "Inicio",
    type: "link",
    icon: "basic-accelerator",
    children: [
      {
        state: "inicio",
        name: "Inicio"
      },
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
        state: "pagocategoria",
        name: "Pago Remisiones"
      }
    ]
  },

];


@Injectable()
export class MenuService {

  constructor(private authServ: authService) { }
  getAll(): Menu[] {
    const user: UsuarioAutenticado = this.authServ.getLoggedUser();
    if (user.rol.id === 1)
      return MENUITEMS;
    else
      return MENUITEMSUSER;
  }
}
