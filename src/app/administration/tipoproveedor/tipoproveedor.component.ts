import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProveedorService } from '../../services/administration/tipo-proveedor.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TipoProveedor } from '../../model/administration/TipoProveedor.model';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipoproveedor',
  templateUrl: './tipoproveedor.component.html',
  styleUrls: ['./tipoproveedor.component.css']
})
export class TipoProveedorComponent implements OnInit {

  /// Data Table
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public tipoProvedores : TipoProveedor[] = [];
  // Fin Data table


  public closeResult: string = '';
  public tipoProveedorId : number = 0;

  constructor(private router: Router,
    private service: TipoProveedorService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }


  ngOnInit(): void {
      this.service.getTipoProveedor().subscribe(
         (data : TipoProveedor[]) => {
          this.tipoProvedores = data;
          console.log(data);
          this.dtTrigger.next();
         },
         error=> {
           this.toastr.error("Ocurrió un error al querer obtener el detalle de los tipos de proveedores.")
         })
  }

  // Data Table
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

   // Data Table
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  public nuevoTipoProveedor(): void {
    this.router.navigate(['administration/tipoproveedor/nuevo']);
  }

  public editarTipoProveedor(id : number) : void {
    this.router.navigate(["administration/tipoproveedor/editar", id]);
  }

  public eliminarTipoProveedor() : void {
      this.service.eliminarTipoProveedor(this.tipoProveedorId)
          .subscribe( _ => {
            this.tipoProvedores = this.tipoProvedores.filter(t => t.id !== this.tipoProveedorId);
            this.toastr.success("El tipo de proveedor se ha eliminado correctamente.")
          },
          error => {
            this.toastr.error(error)
      });
  }

  public open(content) : void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.eliminarTipoProveedor()
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

