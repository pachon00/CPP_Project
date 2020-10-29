export class AltaOrden {
    id: number;
    sucursal: string;
    usuario: string;
    fecha_remision: Date;
    fecha_pago: Date;
    monto: number;
    forma_pago: string;
    constructor(){ }
}

export class AltaOrdenDetail{
    proveedor_id: number;
    remisiones: number[];
    constructor( ){ }
}