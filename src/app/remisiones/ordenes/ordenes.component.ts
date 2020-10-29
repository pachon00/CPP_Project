import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Ordenes } from 'src/app/model/remision/ordenes.model';
import { ConfirmationDialogService } from './altaorden/confirmation-dialog/confirmation-dialog.service';
import { AltaOrden } from 'src/app/model/remision/ordenesAlta.model';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  dtElement: DataTableDirective;
  // public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data : Ordenes[] = [];
  public provedores: Proveedor[]=[];
  // public  seleccion: boolean=false;
  public ordersToRemis: number[]=[];
  public monto: number=0;
  public supplierSelected: string="Seleccione un proveedor";
  public dtOptions: DataTables.Settings = {};
  public closeResult: string = '';

    constructor(private router: Router,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private service: OrdenService,
        private activatedRoute: ActivatedRoute,
        private sucursaleService: SucursalService,
        private proveedorService: ProveedorService,
        private toastr: ToastrService,
        private confirmationDialogService: ConfirmationDialogService ) {
        // this.model = new AltaRemision();
      }
      

  ngOnInit(): void {
    this.service.getCreateOrders().subscribe( (data:Ordenes[])=> {
      this.data = data;
      this.dtTrigger.next();
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

  public CreateOrder() : void {
    this.router.navigate(['remisiones/ordenes/nuevo']);
  }

  public open(content, id) : void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        // this.eliminarRemision(remisionId)
        console.log("");
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public editarOrden(id : number) : void {
    this.router.navigate(['remisiones/ordenes/editar', id]);
  }

  public eliminarOrden(item:Ordenes){
        this.openConfirmationDialog('La Orden: '+item.orden_id +' será eliminada.', item);
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

  public openConfirmationDialog(msg:string,item:Ordenes) {
      this.confirmationDialogService.confirm('Favor de confirmar... ', msg )
      .then((confirmed) => {
        if(confirmed)
          this.eliminarOrdenServ(item.orden_id);
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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