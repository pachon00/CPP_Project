import { FormaPago } from "./FormaPago";
import { TipoProveedor } from "./TipoProveedor.model";

export class Proveedor {

  public id : number;
  public nombre : string;
  public direccion: string;
  public rfc : string;
  public codigo_postal : string;
  public telefono : string;
  public dias_credito : number;
  public forma_pago_id : number;
  public tipo_proveedor_id : number;
  public activo : boolean;
  public tipo_proveedor : TipoProveedor;
  public forma_pago : FormaPago;
  public forma_pago_descripcion : string;
  public tipo_proveedor_descripcion : string;

   constructor(

   ){

   }
}


export class ProveedorDto {
  public id : number;
  public nombre : string;
  public direccion: string;
  public rfc : string;
  public codigo_postal : string;
  public telefono : string;
  public dias_credito : number;
  public forma_pago_id : number;
  public tipo_proveedor_id : number;
  public activo : boolean;

  constructor(

    ){

    }
}
