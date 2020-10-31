export class Ordenes {
    orden_id: number;
    proveedor: string;
    usuario_alta: string;
    fecha_alta: Date;
    estatus:number;
    total_remisiones:number;
    monto_total: number;
    estado_orden_id: number;
    forma_pago:string;
    constructor(){ }
}

export class PagarOrden{
    id : number=0;
    persona_recibe : string = '';
    numero_transferencia : string = '';
    numero_cheque : string = '';
    comentarios : string = '';
    constructor( ){}
}
