import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Sucursal } from 'src/app/model/administration/Sucursal.model';
import { SucursalService } from 'src/app/services/administration/sucursal.service';
import { ITipoProveedorAlta, TipoProveedor } from '../../../model/administration/TipoProveedor.model';
import { TipoProveedorService } from '../../../services/administration/tipo-proveedor.service';

@Component({
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class AltaSucursalComponent implements OnInit {

  public accionTitulo: string = "Nuevo";
  public model: Sucursal
  public submitted: boolean = false;
  public altaForm: FormGroup;
  public isUpdate: boolean = false;
  private sucursalId : number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: SucursalService,
    private toastr: ToastrService) {
    this.model = new Sucursal();
  }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.sucursalId = +id;
      if (id) {
        this.service.getProveedorPorId(id)
          .subscribe(
            (model) => {
                this.model = model;
                this.createForm();
                this.accionTitulo = "Editar";
                this.isUpdate = true;
            },
            error => {
              this.toastr.error("Ocurrio un error al querer obtener las sucursal a editar " + error);
            }
          );
      }
    });
  }

  public cancelar(): void {
    if (this.isUpdate) {
      this.router.navigate(["./administration/sucursal"]);
    }
    else {
      this.model = new Sucursal();
      this.altaForm.reset(this.model);
    }
  }

  createForm(): void {
    this.altaForm = this.fb.group({
      nombre: [this.model.nombre, Validators.required],
      encargado: [this.model.encargado, Validators.required],
      activo: [this.model.activo]
    });
  }

  public onSubmit(): void {

    const objData = Object.assign({}, this.altaForm.value);
    const sucursal = { ...objData, id: this.sucursalId ? this.sucursalId : 0};

    if (!this.isUpdate) {

      this.service.postSucursal(sucursal)
      .subscribe(
        (data) => {
          this.toastr.success("La sucursal " + sucursal.nombre + " se ha creado correctamente.")
          this.cancelar();
        },
        error => {
          console.log(error)
          this.toastr.error(error);
        }
      );
    }
    else {
      this.service.postActualizarSucursal(sucursal)
      .subscribe(
        (data) => {
          this.toastr.success("La sucursal " + sucursal.nombre + " se ha actualizado correctamente.")
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
