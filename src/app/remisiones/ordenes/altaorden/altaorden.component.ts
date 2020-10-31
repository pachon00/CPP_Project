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
  public ordersToRemis: number[]=[];
  public monto: number=0;
  public supplierSelected: string="Seleccione un proveedor";
  public remiss:AltaOrdenDetail;
  public order_id: number;
  public model: AltaOrden[];
  public altaForm: FormGroup;
  public accionTitulo: string = "Alta";
  public isUpdate: boolean = false;
  public selectedSupplier: number=-1;
  public closeResult: string = '';

  constructor(private router: Router,
      private modalService: NgbModal,
      private fb: FormBuilder,
      private service: OrdenService,
      private activatedRoute: ActivatedRoute,
      private sucursaleService: SucursalService,
      private proveedorService: ProveedorService,
      private toastr: ToastrService) {
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.order_id = +id;
      if (id) {
        this.service.getOrdenesById(id)
          .subscribe(
            (model) => {
              this.model = model;
              this.data = model;
              this.isUpdate = true;
              this.ordersToRemis=[];
              this.remiss = new AltaOrdenDetail();
              this.remiss.proveedor_id=id;
              this.remiss.remisiones=[];
              this.monto=0;
              this.createForm();
              this.accionTitulo = "Editar";
              this.dtTrigger.next();
            },
            error => {
              this.toastr.error("Ocurrio un error al querer obtener el proveedor a editar " + error);
            }
          );
      }else{
        this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
          this.remiss = new AltaOrdenDetail();
          this.provedores = data;
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

  filterSupplier(event){
    let id = event.target.value;
    this.ordersToRemis=[];
    this.remiss.proveedor_id=id;
    this.remiss.remisiones=[];
    this.monto=0;
    this.service.getOrdenesByIdSupplier(id).subscribe( (data:AltaOrden[])=>{
      this.data = data;
      this.rerender();
    });
  }

  CheckedItem(checked:any,id:any,value:any){
    if(checked){
      this.ordersToRemis.push(id);
      this.monto += Number(value);
      this.remiss.remisiones.push(id);
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
                  this.toastr.success("La remisión se ha creado correctamente.")
                  // this.cancelar();
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
