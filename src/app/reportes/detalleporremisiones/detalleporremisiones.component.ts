import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { FormaPago } from 'src/app/model/administration/FormaPago';
import { Proveedor } from 'src/app/model/administration/Proveedor.model';
import { Sucursal } from 'src/app/model/administration/Sucursal.model';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';
import { FormaPagoService } from 'src/app/services/administration/formapago.service';
import { ProveedorService } from 'src/app/services/administration/proveedores.service';
import { SucursalService } from 'src/app/services/administration/sucursal.service';
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';
import { PagoRemisiones } from '../../model/reportes/remisionesvencidas.model';
import { ReportesService } from '../../services/reportes/reportes.service';


@Component({
  templateUrl: './detalleporremisiones.component.html',
  styleUrls: ['./detalleporremisiones.component.css']
})
export class DetallePorRemisionesComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  private dtElement: DataTableDirective;

  public dtOptions: any = {};//DataTables.Settings = {};

  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : PagoRemisiones[] = [];
  public proveedores : Proveedor[];
  public tipoprovedor : TipoProveedor[];
  public sucursales: Sucursal[];
  public cbFormaPago: FormaPago[];
  public proveedorId: number = 0;
  public tipoprovedorId: number = 0;
  public sucursalId: number = 0;
  //public dtOptions: any;
  public selectedSupplier: number = 0;
  public selectedSupplierType: number = 0;
  public selectedPayType: number = 0;
  public selectedSucursal: number = 0;

  constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private proveedorService : ProveedorService,
    private sucursalService :SucursalService,
    private tipoprovedorService: TipoProveedorService,
    private formaPagoService: FormaPagoService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.proveedorService.getProveedor().subscribe( data => {
        this.proveedores = data;
    });
    this.tipoprovedorService.getTipoProveedor().subscribe( data=> {
      this.tipoprovedor = data;
    });
    this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
      this.cbFormaPago = data;
    });
    this.sucursalService.getSucursal().subscribe( sucursales => {
      this.sucursales = sucursales;
    });

  this.service.getPagoRemisiones(this.proveedorId, this.sucursalId).subscribe( data=> {
    this.data$ = data;
    this.dtTrigger.next();
  });

  this.dtOptions = {
                    columns:[{
                      title: 'Num Remisión',
                      data: 'data.remision_id',
                    },{
                      title: 'Proveedor',
                      data: 'data.proveedor',
                    },{
                      title: 'Sucursal',
                      data: 'data.sucursal',
                    },{
                      title: 'Fecha Alta',
                      data: 'data.fecha_alta',
                    },{ 
                      title: 'Fecha Crédito',
                      data: 'data.fecha_credito',
                    },{
                      title: 'Usuario Alta',
                      data: 'data.usuario_alta',
                    },{  
                      title: 'Forma Pago',
                      data: 'data.forma_pago',
                    },{    
                      title: 'Fecha Pago',
                      data: 'data.fecha_pago',
                    },{
                      title: 'Banco',
                      data: 'data.banco',
                    },{
                      title: '# Cheque',
                      data: 'data.numero_cheque',
                    },{
                      title: '# Transferencia',
                      data: 'data.numero_transferencia',
                    },{
                      title: 'Recibe',
                      data: 'data.persona_recibe',
                    },{
                      title: 'Autoriza',
                      data: 'data.persona_autoriza',
                    }],
                    dom: 'Bfrtip',
                    buttons: [
                      // 'columnsToggle',
                      // 'colvis',
                      // 'copy',
                      // 'print',
                      'excel',
                      'csv',
                    ]
                  };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }


public buscarPorVencer() : void {
  this.service.getPagoRemisiones(this.proveedorId, this.sucursalId).subscribe( data=> {
    this.data$ = data;
    this.rerender();
  });
}

public changeSucursal(event :any) : void {
  this.sucursalId = +event.srcElement.value;
}

public changeProveedor(event :any) : void {
  this.proveedorId = +event.srcElement.value;
}

public changeTproveedor( event : any) : void {
  this.tipoprovedorId = +event.srcElement.value;
}

async filterTypeOfSupplier(event, src){
  if(src==='SupplierType'){
    if(event.target.value!=0){
      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.proveedores = data;
        this.proveedores = this.proveedores.filter(x=>x.tipo_proveedor_id == this.selectedSupplierType);
        let filprov = [];
        this.proveedores.map(item =>{
          filprov.push(item.forma_pago_id);
          });
        this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
          this.cbFormaPago= data;
          this.cbFormaPago = this.cbFormaPago.filter((x)=>{
            return filprov.includes(x.id)
          });
          if(this.proveedores.length>0){
            if(this.cbFormaPago.length>0){
              this.selectedPayType =this.proveedores[0].forma_pago_id;
              this.selectedSupplier = this.proveedores[0].id;
            }else{
              this.selectedPayType = 0;
              this.selectedSupplier = 0;
              this.selectedSucursal = 0;
            }
          }
        });
    });
    }else{
      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.proveedores = data;
      });
      this.tipoprovedorService.getTipoProveedor().subscribe( data=> {
        this.tipoprovedor = data;
      });
      this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
        this.cbFormaPago = data;
      });
      this.sucursalService.getSucursal().subscribe( sucursales => {
        this.sucursales = sucursales;
      });
    }
   }
  }

  filterPayType(event, src){
    if(src==='PayType'){
      if(event.target.value!=0){
          this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.proveedores = data;
          this.proveedores = this.proveedores.filter(x=>x.forma_pago_id==this.selectedPayType);
          if(this.selectedSupplierType != 0){
            this.proveedores = this.proveedores.filter((x)=>x.tipo_proveedor_id == this.selectedSupplierType);
            if(this.proveedores.length>0)
              this.selectedSupplier=this.proveedores[0].id;
          }else{
            if(this.proveedores.length>0)
              this.selectedSupplier=this.proveedores[0].id;
          }
        });
      }else{
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.proveedores = data;

          this.selectedSupplierType=0;
          this.selectedSupplier=0;
        });
        this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
            this.cbFormaPago= data;
        });
      }
    }
  }

}
