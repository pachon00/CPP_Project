import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sucursal } from '../../model/administration/Sucursal.model';
import { UsuarioAlta } from '../../model/usuario/usuarioAlta.model';
import { SucursalService } from '../../services/administration/sucursal.service';
import { UsuarioService } from '../../services/usuarios/usuario.service';

@Component({

  templateUrl: './usuarioAdmin.component.html',
  styleUrls: ['./usuarioAdmin.component.css']
})

export class UsuarioAdminComponent implements OnInit {

  public accionTitulo: string = "Nuevo Usuario"
  public sucursales: Sucursal[];
  public altaForm: FormGroup;
  public model: UsuarioAlta;
  private isUpdate: boolean;
  public proveedorId: number = 0;

  constructor (
    private router: Router,
    private activedRoute: ActivatedRoute,
    private susucursalService: SucursalService,
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService

  )  {
    this.model = new UsuarioAlta();
  }

  ngOnInit() : void {
    this.susucursalService.getSucursal()
      .subscribe(sucursales => {
        this.sucursales = sucursales;
    });

    this.createForm();

  }

  public cancelar(): void {
    if (this.isUpdate) {
      this.router.navigate(['administration/proveedores']);
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
      password: [this.model.sucursal_id, Validators.required],
      rol_id : [this.model.rol_id, Validators.required],
      activo: [this.model.activo]
    });
  }

  public onSubmit() : void {

  }

}
