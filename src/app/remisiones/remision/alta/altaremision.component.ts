import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProveedorService } from '../../../services/administration/proveedores.service';
import { SucursalService } from '../../../services/administration/sucursal.service';
import { Proveedor } from '../../../model/administration/Proveedor.model';
import { Sucursal } from '../../../model/administration/Sucursal.model';
import { AltaRemision } from '../../../model/remision/remisionAlta.model';
import { RemisionService } from '../../../services/remisiones/remision.service';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { authService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './altaremision.component.html',
  styleUrls: ['./altaremision.component.css']
})
export class AltaRemisionComponent implements OnInit {

  public accionTitulo: string = "Alta";
  public remisionId: number = 0;
  public submitted: boolean = false;
  public altaForm: FormGroup;
  public isUpdate: boolean = false;
  public model: AltaRemision;
  public selectedSupplier: number;
  public fechaRemision: Date;
  public fechaPago: any;

  public sucursales: Sucursal[];
  public proveedores: Proveedor[];

  constructor(private router: Router,
    private fb: FormBuilder,
    private service: RemisionService,
    private activatedRoute: ActivatedRoute,
    private sucursaleService: SucursalService,
    private proveedorService: ProveedorService,
    private authServ : authService,
    private toastr: ToastrService) {
    this.model = new AltaRemision();
  }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.remisionId = +id;
      if (id) {
        this.service.getRemisionPorId(id)
          .subscribe(
            (model) => {
              this.isUpdate = true;
              this.model = model;
              this.createForm();
              this.accionTitulo = "Editar";
            },
            error => {
              this.toastr.error("Ocurrio un error al querer obtener la remision a editar " + error);
            }
          );
      }
    });

    this.proveedorService.getProveedor().subscribe(data => {
      if (data) {
        this.proveedores = data.filter(d => d.activo);
      }
    });

    this.sucursaleService.getSucursal().subscribe(data => {
      if (data) {
        let usuario =  this.authServ.getLoggedUser();
        let temData = data;
        if (usuario) {
          if (usuario.rol.id !== 1) {
            temData = temData.filter( d => d.id === usuario.sucursal.id);
          }
        }
        this.sucursales = temData.filter(d => d.activo);
      }
    })
  }


  public onSubmit(): void {
    let objData = Object.assign({}, this.altaForm.value);
    objData = {...objData, proveedor_id: +objData.proveedor_id, sucursal_id: +objData.sucursal_id, id: 0};
    console.log(objData);
    if (!this.isUpdate) {

      this.service.postRemision(objData)
        .subscribe(
          (data) => {
            this.toastr.success("La remisión se ha creado correctamente.")
            this.cancelar();
          },
          error => {
            console.log(error)
            this.toastr.error(error);
          }
        );
    }
    else {

      objData.id = +this.remisionId;
      this.service.postActualizarRemision(objData)
        .subscribe(
          (data) => {
            this.toastr.success("la remisión se ha actualizado correctamente.")
            this.cancelar();
          },
          error => {
            console.log(error)
            this.toastr.error(error);
          }
        );
    }
  }

  public cancelar(): void {
    if (this.isUpdate) {
      this.router.navigate(["./remisiones/remisiones"]);
    }
    else {
      this.model = new AltaRemision();
      this.altaForm.reset(this.model);
    }
  }

  createForm(): void {
    const currency ="\^([\\d]{0,9})(\\.|$)([\\d]{2,2}|)$";
    if (this.isUpdate){
      this.altaForm = this.fb.group({
        proveedor_id: [this.model.proveedor_id, Validators.required],
        sucursal_id: [this.model.sucursal_id, Validators.required],
        cantidad: [this.model.cantidad, [Validators.required, Validators.pattern(currency)]],
        comentarios: [this.model.comentarios],
        fecha_remision: [ formatDate(this.model.fecha_remision, 'yyyy-MM-dd', 'en'),  Validators.required],
        fecha_pago: [formatDate(this.model.fecha_pago, 'yyyy-MM-dd', 'en')],
        numero_remision : [this.model.numero_remision, Validators.required],
      });

      this.fechaPago = formatDate(this.model.fecha_pago, 'yyyy-MM-dd', 'en');
      this.selectedSupplier = this.model.proveedor_id;
    }
    else {
      this.altaForm = this.fb.group({
        proveedor_id: [this.model.proveedor_id, Validators.required],
        sucursal_id: [this.model.sucursal_id, Validators.required],
        cantidad: [this.model.cantidad, [Validators.required, Validators.pattern(currency)]],
        comentarios: [this.model.comentarios],
        fecha_remision: [this.model.fecha_remision, Validators.required],
        fecha_pago: [this.model.fecha_pago],
        numero_remision : [this.model.numero_remision, Validators.required],
      });
    }
  }

  changePayDate($event){
    let x = this.proveedores.filter((x)=>x.id ==this.selectedSupplier);
    if(this.fechaRemision){
      let fecha = this.addDays( this.fechaRemision, x[0].dias_credito );
      this.fechaPago = this.transformDate(fecha.toString());
    }
  }

  transformDate(value:string){
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'yyyy-MM-dd');
    return value;
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days+1);
    return result;
  }

  getObject($event){
    if(this.selectedSupplier > 0 ){
      let x = this.proveedores.filter((x)=>x.id == this.selectedSupplier);
      let fecha = this.addDays( this.fechaRemision, x[0].dias_credito );
      this.fechaPago = this.transformDate(fecha.toString());
    }
  }

}
