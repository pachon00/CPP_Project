export class RemisionesVencidas {
  remision_id: number;
  sucursal: string;
  proveedor: string;
  fecha_alta: Date;
  fecha_credito:Date;
  forma_pago: string;
  dias_vencimiento: number;
  proveedor_id: number;
  sucursual_id: number;
  constructor(){ }
}

export class PagoRemisiones{
  orden_id: number;
  numero_remision: number;
  proveedor: string;
  fecha_alta: Date;
  fecha_credito: Date;
  usuario_alta: string;
  forma_pago: string;
  fecha_pago: Date;
  sucursal: string;
  banco: string;
  numero_cheque: string;
  numero_transferencia: string;
  persona_recibe: string;
  persona_autoriza: string;
  constructor(){}
}