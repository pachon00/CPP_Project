import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sucursal } from '../../model/administration/Sucursal.model';
import { UsuarioAlta } from '../../model/usuario/usuarioAlta.model';
import { SucursalService } from '../../services/administration/sucursal.service';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { Rol } from '../../model/usuario/usuarioAutenticado.model';

@Component({
  templateUrl: './usuarioAdmin.component.html',
  styleUrls: ['./usuarioAdmin.component.css']
})

export class UsuarioAdminComponent implements OnInit {

  public accionTitulo: string = "Nuevo Usuario"
  public sucursales: Sucursal[];
  public roles: Rol[];
  public altaForm: FormGroup;
  public model: UsuarioAlta;
  private isUpdate: boolean;
  public proveedorId: number = 0;

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private susucursalService: SucursalService,
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private UsuarioId: number = 0

  )  {
    this.model = new UsuarioAlta();
  }

  ngOnInit() : void {
    this.susucursalService.getSucursal()
      .subscribe(sucursales => {
        this.sucursales = sucursales;
      });

    this.usuarioService.getRoles()
      .subscribe(roles => { this.roles = roles });

    this.createForm();

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.UsuarioId = +id;
      if (id) {
        this.usuarioService.getUsuarioPorId(id)
          .subscribe(
            (model) => {
              this.model.id = model.id;
              this.model.nombre = model.nombre;
              this.model.activo = model.activo;
              this.model.rol_id = model.rol.id;
              this.model.sucursal_id = model.sucursal.id;
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
      this.router.navigate(['usuarios/usuarios']);
    }
    else {
      this.model = new UsuarioAlta();
      this.altaForm.reset(this.model);
    }
  }

  createForm(): void {
    this.altaForm = this.fb.group({
      user: [this.model.user, Validators.required],
      nombre: [this.model.nombre, Validators.required],
      sucursal_id: [this.model.sucursal_id, Validators.required],
      password: [this.model.password, Validators.required],
      rol_id : [this.model.rol_id, Validators.required],
      activo: [this.model.activo]
    });
  }

  public onSubmit() : void {
    const objData = Object.assign({}, this.altaForm.value);
    const usuario = { ...objData, id: this.UsuarioId ? this.UsuarioId : 0 };

    if (!this.isUpdate) {

      this.usuarioService.postUsuario(usuario)
        .subscribe(
          (data) => {
            this.toastr.success("El usuario " + usuario.nombre + " se ha creado correctamente.")
            this.cancelar();
          },
          error => {
            console.log(error)
            this.toastr.error(error);
          }
        );
    }
    else {
      this.usuarioService.postActualizarUsuario(usuario)
        .subscribe(
          (data) => {
            this.toastr.success("El usuario " + usuario.nombre + " se ha actualizado correctamente.")
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
