import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoProveedor } from '../../../model/administration/TipoProveedor.model';
import { FormaPago } from '../../../model/administration/FormaPago';
import { TipoProveedorService } from '../../../services/administration/tipo-proveedor.service';
import { Proveedor, ProveedorDto } from '../../../model/administration/Proveedor.model';
import { ProveedorService } from 'src/app/services/administration/proveedores.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminProveedoresComponent implements OnInit {

  public accionTitulo: string = "Nuevo Proveedor"
  public formaPago: FormaPago[];
  public tipoProveedor: TipoProveedor[];
  public altaForm: FormGroup;
  public model: ProveedorDto;
  private isUpdate: boolean;
  public proveedorId: number = 0;

  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private tipoProveedorService: TipoProveedorService,
    private proveedorService: ProveedorService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService) {

    this.model = new Proveedor();
  }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(
      response => {
        console.log(response.formaPago);
        this.formaPago = response.formaPago;
      }
    );

    this.tipoProveedorService.getTipoProveedor()
      .subscribe(tipoProveedor => {
        this.tipoProveedor = tipoProveedor;
      })

    this.createForm();

    this.activedRoute.params.subscribe(params => {
      let id = params['id'];
      this.proveedorId = id === undefined ? 0 : +id;
      if (id) {
        this.proveedorService.getProveedorPorId(id)
          .subscribe(
            (model) => {
              this.model = model;
              this.createForm();
              this.accionTitulo = "Editar Proveedor";
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
      this.router.navigate(['administration/proveedores']);
    }
    else {
      this.model = new ProveedorDto();
      this.altaForm.reset(this.model);
    }
  }

  public onSubmit(): void {
    const objData = Object.assign({}, this.altaForm.value);
    const proveedorDto: ProveedorDto = {
      ...objData,
      activo: objData.activo ? objData.activo : false,
      forma_pago_id: +objData.forma_pago_id,
      tipo_proveedor_id: +objData.tipo_proveedor_id,
      id: this.proveedorId
    };

    console.log("Proveedor", proveedorDto);

    if (!this.isUpdate) {

      this.proveedorService.postProveedor(proveedorDto)
        .subscribe(data => {
          this.toastr.success("El proveedor se ha agregado correctamente.");
          this.cancelar();
        }, error => {
          this.toastr.error(error);
        });

    }
    else {

      this.proveedorService.postActualizarProveedor(proveedorDto)
        .subscribe(
          (data) => {
            this.toastr.success("El   proveedor " + proveedorDto.nombre + " se ha actualizado correctamente.")
            this.cancelar();
          },
          error => {
            console.log(error)
            this.toastr.error(error);
          }
        );

    }



  }

  createForm(): void {
    this.altaForm = this.fb.group({
      nombre: [this.model.nombre, Validators.required],
      direccion: [this.model.direccion, Validators.required],
      rfc: [this.model.rfc, Validators.required],
      telefono: [this.model.telefono, Validators.required],
      forma_pago_id: [this.model.forma_pago_id, Validators.required],
      dias_credito: [this.model.dias_credito, [Validators.required, Validators.min(1), Validators.max(30)]],
      tipo_proveedor_id: [this.model.tipo_proveedor_id, Validators.required],
      activo: [this.model.activo]
    });
  }


}
