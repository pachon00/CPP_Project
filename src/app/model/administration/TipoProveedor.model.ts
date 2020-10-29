export class TipoProveedor
{
   constructor(
    public id: number,
    public tipo_proveedor :string,
    public activo : boolean
   ){
   }
}


export interface ITipoProveedorAlta
{
  Id : number,
  tipo_proveedor : string,
  activo : boolean,
  error : string
}
