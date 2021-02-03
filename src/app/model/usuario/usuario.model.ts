import { Sucursal } from "../administration/Sucursal.model";
import { Rol } from "./usuarioAutenticado.model";

export class Usuario {
  public id: number;
  public rol: Rol;
  public sucursal: Sucursal;
  public user : string;
  public nombre : string;
  public activo : boolean;
  constructor () {

  }

}
