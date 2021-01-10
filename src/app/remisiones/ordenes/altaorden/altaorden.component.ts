import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProveedorService } from '../../../services/administration/proveedores.service';
import { SucursalService } from '../../../services/administration/sucursal.service';
import { Proveedor } from '../../../model/administration/Proveedor.model';
import { OrdenService } from 'src/app/services/remisiones/ordenes.service';
import { AltaOrden, AltaOrdenDetail } from 'src/app/model/remision/ordenesAlta.model';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';
import { FormaPago } from 'src/app/model/administration/FormaPago';
import { FormaPagoService } from 'src/app/services/administration/formapago.service';

@Component({
  selector: 'app-altaorden',
  templateUrl: './altaorden.component.html',
  styleUrls: ['./altaorden.component.css']
})
export class AltaOrdenComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data : AltaOrden[] = [];
  public provedores: Proveedor[]=[];
  public provedoresOriginal: Proveedor[]=[];
  public cbTipoProvedor: TipoProveedor[];
  public cbTipoProvedorOriginal: TipoProveedor[];
  public cbFormaPago: FormaPago[];
  public cbFormaPagoOriginal: FormaPago[];

  public provedoresFP: Proveedor[]=[];
  public provedoresTP: Proveedor[]=[];

  public ordersToRemis: number[]=[];
  public monto: number=0;
  public supplierSelected: string="Seleccione un proveedor";
  public remiss:AltaOrdenDetail;
  public order_id: number;
  public model: AltaOrden[];
  public altaForm: FormGroup;
  public accionTitulo: string = "Alta";
  public isUpdate: boolean = false;

  public selectedSupplier: number = -1;
  public selectedSupplierType: number = -1;
  public selectedPayType: number = -1;

  public closeResult: string = '';

  constructor(private router: Router,
      private modalService: NgbModal,
      private fb: FormBuilder,
      private service: OrdenService,
      private activatedRoute: ActivatedRoute,
      private sucursaleService: SucursalService,
      private proveedorService: ProveedorService,
      private tipoProvService: TipoProveedorService,
      private formaPagoService: FormaPagoService,
      private toastr: ToastrService) {
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.order_id =+ id;
      if (id) {
        this.service.getOrdenesById(id)
          .subscribe(
            (model) => {
              this.model = model;
              this.data = model;
              this.isUpdate = true;
              this.ordersToRemis=[];
              this.remiss = new AltaOrdenDetail();
              this.remiss.proveedor_id=+id;
              this.remiss.remisiones=[];
              this.monto=0;
              this.createForm();
              this.accionTitulo = "Editar";
              this.dtTrigger.next();
            },
            error => {
              this.toastr.error("Ocurrio un error al querer obtener la orden a editar " + error);
            }
          );
      }else{
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.remiss = new AltaOrdenDetail();
          this.provedores = data;
          // let s: any = {id:-1, nombre :"Todos" };
          // this.provedores.push(s);
        });

        this.tipoProvService.getTipoProveedor().subscribe((data:TipoProveedor[])=>{
          this.cbTipoProvedor = data;
          // let s: any = {id:-1, tipo_proveedor :"Todos" };
          // this.cbTipoProvedor.push(s);
        });

        this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
          this.cbFormaPago = data;
          // let s: any = {id:-1,forma_pago :"Todos", activo: true, proveedor:null};
          // this.cbFormaPago.push(s);
        });

        this.service.getOrdenesByIdSupplier(0).subscribe( (data:AltaOrden[])=>{
          this.data = data;
          this.dtTrigger.next();
        });
      }
    });
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

filterSupplier(event,src){
  if(src==='Supplier'){
    if(event.target.value!=-1){
      console.log('Supplier!!!');
      let id = event.target.value;
      this.ordersToRemis=[];
      this.remiss.proveedor_id=+id;
      this.remiss.remisiones=[];
      this.monto=0;
      this.service.getOrdenesByIdSupplier(id).subscribe( (data:AltaOrden[])=>{
        this.data = data;
        this.rerender();
      });
    }else{
      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.provedores = data;
      });
      this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
        this.cbFormaPago= data;
      });
      this.service.getOrdenesByIdSupplier(0).subscribe( (data:AltaOrden[])=>{
        this.data = data;
        this.rerender();
      });
    }
  }
}

filterPayType(event, src){
  if(src==='PayType'){
    if(event.target.value!=-1){
        console.log('pago aqui...',this.selectedPayType);
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.provedores = data;
        this.provedores = this.provedores.filter(x=>x.forma_pago_id==this.selectedPayType);
        console.log('2 aqui...',this.selectedSupplierType);
        if(this.selectedSupplierType != -1){
          this.provedores = this.provedores.filter((x)=>x.tipo_proveedor_id == this.selectedSupplierType);
        }
        if(this.provedores.length>0){
          this.selectedSupplier=this.provedores[0].id;
          this.service.getOrdenesByIdSupplier(this.selectedSupplier).subscribe( (data:AltaOrden[])=>{
            this.data = data;
            this.rerender();
          });
        }
      });
    }else{

      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.provedores = data;
        this.selectedSupplierType=-1;
      });
      this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
          this.cbFormaPago= data;
      });
      this.service.getOrdenesByIdSupplier(this.selectedSupplier).subscribe( (data:AltaOrden[])=>{
          this.data = data;
          this.rerender();
      });
    }

  }
}
  async filterTypeOfSupplier(event, src){
    if(src==='SupplierType'){
      if(event.target.value==-1){
        console.log('aqui...',this.selectedSupplier);
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.provedores =data;
          // console.log('provedor ',this.selectedSupplier);
        });
        this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
          this.cbFormaPago= data;
          // console.log('pay ',this.selectedPayType);
        });
        this.service.getOrdenesByIdSupplier(0).subscribe( (data:AltaOrden[])=>{
          this.data = data;
          this.rerender();
        });
      }
      if(event.target.value!=-1){
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.provedores =data;
          this.provedores =  this.provedores.filter(x=>x.tipo_proveedor_id == this.selectedSupplierType);
          let filprov = [];
          this.provedores.map(item =>{
            filprov.push(item.forma_pago_id); }
          );
          this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
            this.cbFormaPago= data;
            this.cbFormaPago =  this.cbFormaPago.filter((x)=>x.id ==this.provedores[0].forma_pago_id )
            if(this.cbFormaPago.length>0){
              this.selectedPayType =this.provedores[0].forma_pago_id;
              this.selectedSupplier = this.provedores[0].id;
            }
              this.service.getOrdenesByIdSupplier(this.selectedPayType).subscribe( (data:AltaOrden[])=>{
                this.data = data;
                this.rerender();
              });
          });
        });
      }
    }
  }

  refreshAll(){
    this.service.getOrdenesByIdSupplier(0).subscribe( (data:AltaOrden[])=>{
      this.data = data;
      this.rerender();
    });
    this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
      this.provedores =data;
      // let p: any = {id:-1, nombre :"Todos" };
      // this.provedores.push(p);
      this.selectedSupplier=-1;
          this.tipoProvService.getTipoProveedor().subscribe((data:TipoProveedor[])=>{
          this.cbTipoProvedor = data;
          // let tp: any = {id:-1, tipo_proveedor :"Todos" };
          // this.cbTipoProvedor.push(tp);
          this.selectedSupplierType =-1;
                this.formaPagoService.getFormaPago().subscribe((data:FormaPago[])=>{
                  this.cbFormaPago= data;
                  // let tf: any = {id:-1, forma_pago :"Todos",activo: true,  proveedor:null};
                  // this.cbFormaPago.push(tf);
                  debugger;
                     console.log('forma pago ',this.selectedPayType);
                     console.log('tipo prov ',this.selectedSupplierType);
                     console.log('Prov ',this.selectedSupplier);
                });
          });
    });
    console.log('2forma pago ',this.selectedPayType);
    console.log('2tipo prov ',this.selectedSupplierType);
    console.log('2Prov ',this.selectedSupplier);
   }

  CheckedItem(checked:any,id:any,value:any){
    if(checked){
      this.ordersToRemis.push(+id);
      this.monto += Number(value);
      this.remiss.remisiones.push(+id);
    }else{
      this.ordersToRemis.splice(this.ordersToRemis.indexOf(id), 1);
      this.monto -= Number(value);
      this.remiss.remisiones.splice(this.remiss.remisiones.indexOf(id),1);
    }
  }

  // public open(content, id) : void {
  //   this.remiss.proveedor_id=25;
  //   this.remiss.remisiones=[];
  //   this.remiss.remisiones.push(3);
  //   this.remiss.remisiones.push(5);
  //   this.remiss.remisiones.push(6);
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //         this.service.saveOrdenes(this.remiss)
  //           .subscribe((data) => {
  //                     this.toastr.success("La remisión se ha creado correctamente.")
  //                     // this.cancelar();
  //                   },
  //                   error => {
  //                     console.log(JSON.stringify(this.remiss));
  //                     console.log(error);
  //                     this.toastr.error(error);
  //                   }
  //                 );
  //             }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  public open(content, id) : void {
    if(this.ordersToRemis.length>0){
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          if(!this.isUpdate){
              this.service.saveOrdenes(this.remiss).subscribe(
                (data) => {
                  this.toastr.success("La remisión se ha creado correctamente.");
                  this.router.navigate(['remisiones/ordenes']);
                },
                error => {
                  console.log(error)
                  this.toastr.error(error);
                }
              );
          }else{
              this.service.updateOrdenes(this.remiss);
          }
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  createForm(): void {
    this.data.map((x)=>{
      this.CheckedItem(true,x.id,x.monto);
    });
  }


}
