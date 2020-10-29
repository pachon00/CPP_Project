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


  public sucursales: Sucursal[];
  public proveedores: Proveedor[];

  constructor(private router: Router,
    private fb: FormBuilder,
    private service: RemisionService,
    private activatedRoute: ActivatedRoute,
    private sucursaleService: SucursalService,
    private proveedorService: ProveedorService,
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
              this.model = model;
              this.createForm();
              this.accionTitulo = "Editar";
              this.isUpdate = true;
            },
            error => {
              this.toastr.error("Ocurrio un error al querer obtener el proveedor a editar " + error);
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
        this.sucursales = data.filter(d => d.activo);
      }
    })
  }


  public onSubmit(): void {
    const objData = Object.assign({}, this.altaForm.value);
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
      this.router.navigate(["./administration/tipoproveedor"]);
    }
    else {
      this.model = new AltaRemision();
      this.altaForm.reset(this.model);
    }
  }

  createForm(): void {
    const currency ="\^([\\d]{0,9})(\\.|$)([\\d]{2,2}|)$";
    this.altaForm = this.fb.group({
      proveedor_id: [this.model.proveedor_id, Validators.required],
      sucursal_id: [this.model.sucursal_id, Validators.required],
      cantidad: [this.model.cantidad, [Validators.required, Validators.pattern(currency)]],
      comentarios: [this.model.comentarios],
      fecha_remision: [this.model.fecha_remision, Validators.required],
    });
  }

}
