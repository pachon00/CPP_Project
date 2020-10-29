import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Sucursal } from 'src/app/model/administration/Sucursal.model';
import { SucursalService } from 'src/app/services/administration/sucursal.service';
import { Proveedor } from '../../model/administration/Proveedor.model';
import { ProveedorService } from '../../services/administration/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data: Sucursal[];
  public sucursalId : number = 0;

  constructor(
    private router: Router,
    private service: SucursalService,
    private toastr : ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.service.getSucursal()
      .subscribe(
        sucursales => {
            this.data = sucursales;
            this.dtTrigger.next();
            console.log(this.data);
        },
        error => {
          this.toastr.error(error);
        })
  }


  public nuevo(): void {
    this.router.navigate(['administration/sucursal/nuevo'])
  }

  public editar(id : number) : void {
    this.router.navigate(["administration/sucursal/editar", id]);
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

  public eliminarTipoProveedor(id) : void {
    this.service.eliminarSucursal(id)
        .subscribe( _ => {
          this.data = this.data.filter(t => t.id !== id);
          this.toastr.success("La sucursal se ha eliminado correctamente.")
        },
        error => {
          this.toastr.error(error)
      });
  }

  public open(content, id) : void {
    console.log(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.eliminarTipoProveedor(id)
    }, (reason) => {
    // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
