import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProveedorService } from '../../services/administration/proveedores.service';
import { SucursalService } from '../../services/administration/sucursal.service';
import { Proveedor } from '../../model/administration/Proveedor.model';
import { OrdenService } from 'src/app/services/remisiones/ordenes.service';
import { Ordenes, PagarOrden } from 'src/app/model/remision/ordenes.model';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data : Ordenes[] = [];
  public selectedOrder : Ordenes;
  public provedores: Proveedor[]=[];
  // public  seleccion: boolean=false;
  public ordersToRemis: number[]=[];
  public monto: number=0;
  public supplierSelected: string="Seleccione un proveedor";
  public closeResult: string = '';
  public altaForm: FormGroup;
  public recepcion: PagarOrden;

    constructor(private router: Router,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private service: OrdenService,
        private activatedRoute: ActivatedRoute,
        private sucursaleService: SucursalService,
        private proveedorService: ProveedorService,
        private toastr: ToastrService) {
        // this.model = new AltaRemision();
      }
      

  ngOnInit(): void {
    this.recepcion = new PagarOrden;
    this.loadData();
  }      

  loadData(){
    this.service.getCreateOrders().subscribe( (data:Ordenes[])=> {
      this.data = data;
      this.dtTrigger.next();
      this.rerender();
    });
  }

  createForm(): void {
    //this.recepcion = new PagarOrden;
    this.altaForm = this.fb.group({
      persona_recibe : [this.recepcion.persona_recibe,Validators.required],
      nroCheck : [this.recepcion.numero_cheque,Validators.required],
      nroTrans : [this.recepcion.numero_transferencia,Validators.required],
      commnet : [this.recepcion.comentarios,Validators.required ],
    });
    //console.log(this.altaForm.controls['persona_recibe'].errors.required);
    console.log(this.altaForm.controls['comentarios']);
    console.log(this.recepcion);

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

  public CreateOrder() : void {
    this.router.navigate(['remisiones/ordenes/nuevo']);
  }

  public open(content, id) : void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.eliminarOrdenServ(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public TipoPago(content, id) : void {
    let filterData = this.data.filter((x)=>x.orden_id === id);
    this.selectedOrder = filterData[0];
    this.recepcion = new PagarOrden;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.service.savePagarOrden(this.recepcion)
        .subscribe( _ => {
          this.data = this.data.filter(t => t.orden_id != id);
          this.toastr.success("El pago fue registrado correctamente.")
        },
          error => {
              this.toastr.error(error)
      });
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }, );
    
  }

  public editarOrden(id : number) : void {
    this.router.navigate(['remisiones/ordenes/editar', id]);
  }

  public eliminarOrdenServ(id) : void {
      this.service.deleteOrdenes(id)
          .subscribe( _ => {
            this.data = this.data.filter(t => t.orden_id != id);
            this.toastr.success("El proveedor se ha eliminado correctamente.")
          },
          error => {
            this.toastr.error(error)
        });
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



}