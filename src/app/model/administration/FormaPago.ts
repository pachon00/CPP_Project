export class FormaPago {
    constructor (
      public id : number,
      public forma_pago : string,
      public activo: boolean,
      public proveedor: number
    ) {

    }
}
