import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITipoProveedorAlta, TipoProveedor } from '../../../model/administration/TipoProveedor.model';
import { TipoProveedorService } from '../../../services/administration/tipo-proveedor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class TipoProveedorAdminComponent implements OnInit {

  public accionTitulo: string = "Nuevo";
  public model: TipoProveedor
  public submitted: boolean = false;
  public altaForm: FormGroup;
  public isUpdate: boolean = false;
  private tipoProveedorId : number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TipoProveedorService,
    private toastr: ToastrService) {
    this.model = new TipoProveedor(0, "", false);
  }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.tipoProveedorId = +id;
      if (id) {
        this.service.getTipoProveedorPorId(id)
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
  }

  public cancelar(): void {
    if (this.isUpdate) {
      this.router.navigate(["./administration/tipoproveedor"]);
    }
    else {
      this.model = new TipoProveedor(0, "", false);
      this.altaForm.reset(this.model);
    }
  }

  createForm(): void {
    this.altaForm = this.fb.group({
      tipo_proveedor: [this.model.tipo_proveedor, Validators.required],
      activo: [this.model.activo]
    });
  }

  public onSubmit(): void {

    const objData = Object.assign({}, this.altaForm.value);
    const iAltaTipoProveedor: ITipoProveedorAlta = {
      Id: this.tipoProveedorId ? this.tipoProveedorId  : 0,
      tipo_proveedor: objData.tipo_proveedor,
      activo: objData.activo,
      error: ''
    };


    if (!this.isUpdate) {

      this.service.postProveedor(iAltaTipoProveedor)
      .subscribe(
        (data) => {
          this.toastr.success("El tipo de proveedor " + iAltaTipoProveedor.tipo_proveedor + " se ha creado correctamente.")
          this.cancelar();
        },
        error => {
          console.log(error)
          this.toastr.error(error);
        }
      );
    }
    else {
      this.service.postActualizarTipoProveedor(iAltaTipoProveedor)
      .subscribe(
        (data) => {
          this.toastr.success("El tipo de proveedor " + iAltaTipoProveedor.tipo_proveedor + " se ha actualizado correctamente.")
          this.cancelar();
        },
        error => {
          console.log(error)
          this.toastr.error(error);
        }
      );
    }
  }

}
