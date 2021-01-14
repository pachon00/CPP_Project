import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Proveedor } from '../../model/administration/Proveedor.model';
import { ProveedorService } from '../../services/administration/proveedores.service';
import { RemisionesVencidas } from '../../model/reportes/remisionesvencidas.model';
import { ReportesService } from '../../services/reportes/reportes.service';
import { SucursalService } from '../../services/administration/sucursal.service';
import { Sucursal } from '../../model/administration/Sucursal.model';
import { PagoProveedores } from 'src/app/model/reportes/pagoproveedores.model';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';
import { FormaPagoService } from 'src/app/services/administration/formapago.service';
import { FormaPago } from 'src/app/model/administration/FormaPago';
import { OrdenService } from 'src/app/services/remisiones/ordenes.service';


@Component({
  templateUrl: './pagoproveedores.component.html',
  styleUrls: ['./pagoproveedores.component.css']
})
export class PagoProveedoresComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  public dtOptions: any={}; //DataTables.Settings = {};

  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : PagoProveedores[] = [];
  public proveedores : Proveedor[];
  public tipoprovedor : TipoProveedor[];
  public cbFormaPago: FormaPago[];
  public sucursales: Sucursal[];
  public proveedorId: number = 0;
  public tipoprovedorId: number = 0;
  public sucursalId: number = 0;

  public selectedSupplier: number = 0;
  public selectedSucursal: number = 0;
  public selectedSupplierType: number = 0;
  public selectedPayType: number = 0;

 constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private Ordenservice: OrdenService,
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
    this.service.getPagoOrdenesProveedor(this.proveedorId).subscribe( data=> {
      this.data$ = data;
      this.dtTrigger.next();
    });

    this.dtOptions = {
      columns:[{
        title: 'Num Orden',
        data: 'orden_id',
        defaultContent: "",
      },{
        title: 'Proveedor',
        data: 'proveedor',
        defaultContent: "",
      },{
        title: 'Fecha Alta',
        data: 'fecha_alta',
        defaultContent: "",
      },{
        title: 'Usuario Alta',
        data: 'usuario_alta',
        defaultContent: "",
      },{
        title: 'Fecha Pago',
        data: 'fecha_pago',
        defaultContent: "",
      },{
        title: 'Banco',
        data: 'banco',
        defaultContent: "",
      },{
        title: '# Cheque',
        data: 'numero_cheque',
        defaultContent: "",
      },{
        title: '# Transferencia',
        data: 'numero_transferencia',
        defaultContent: "",
      },{
        title: 'Recibe',
        data: 'persona_recibe',
        defaultContent: "",
      },{
        title: '# Remisiones',
        data: 'numero_remisiones',
        defaultContent: "",
      },{
        title: 'Acciones',
        defaultContent: "",
      }],
      dom: 'Bfrtip',
      buttons: [
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

  public buscarPagoProveedor() : void {
    this.service.getPagoOrdenesProveedor(this.proveedorId).subscribe( data=> {
      this.data$ = data;
      this.rerender();
    })
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
