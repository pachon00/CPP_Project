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
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-altaorden',
  templateUrl: './altaorden.component.html',
  styleUrls: ['./altaorden.component.css']
})
export class AltaOrdenComponent implements OnInit {
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

  constructor(private router: Router,
      private fb: FormBuilder,
      private service: OrdenService,
      private activatedRoute: ActivatedRoute,
      private sucursaleService: SucursalService,
      private proveedorService: ProveedorService,
      private toastr: ToastrService,
      private confirmationDialogService: ConfirmationDialogService ) {
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

  filterSupplier(id: number, nombre: string){
    this.ordersToRemis=[];
    this.remiss.proveedor_id=id;
    this.remiss.remisiones=[];
    this.monto=0;
    this.supplierSelected = nombre;

    this.service.getOrdenesByIdSupplier(id).subscribe( (data:AltaOrden[])=>{
      this.data = data;
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

  CreateRemission(){
    if(this.ordersToRemis.length>0){
      if(this.isUpdate){
        this.openConfirmationDialog('Será actualizada una remisión con las ordenes: '+this.ordersToRemis+' Monto Total: $'+this.monto.toFixed(2));
      }else{
        this.openConfirmationDialog('Será generada una remisión con las ordenes: '+this.ordersToRemis+' Monto Total: $'+this.monto.toFixed(2));
      }
    }
  }

  public openConfirmationDialog(msg:string) {
    this.confirmationDialogService.confirm('Favor de confirmar... ', msg)
    .then((confirmed) => {
      if(confirmed){
          console.log('User confirmed:', confirmed);
          if(!this.isUpdate){
            this.service.saveOrdenes(this.remiss);
          }else{
            this.service.updateOrdenes(this.remiss);
          }
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  createForm(): void {
    this.data.map((x)=>{
      this.CheckedItem(true,x.id,x.monto);
    });
  }

}