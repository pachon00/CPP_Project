import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Proveedor } from '../../model/administration/Proveedor.model';
import { ProveedorService } from '../../services/administration/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public proveedores: Proveedor[];
  public proveedorId : number = 0;

  constructor(
    private router: Router,
    private proveedorService: ProveedorService,
    private toastr : ToastrService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.proveedorService.getProveedor()
      .subscribe(
        proveedores => {
            this.proveedores = proveedores;
            this.dtTrigger.next();
            console.log(proveedores);
        },
        error => {
          this.toastr.error(error);
        })
  }


  public nuevoProveedor(): void {
    this.router.navigate(['administration/proveedores/nuevo'])
  }

  public editarProveedor(id : number) : void {
    this.router.navigate(["administration/proveedores/editar", id]);
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
    this.proveedorService.eliminarProveedor(id)
        .subscribe( _ => {
          this.proveedores = this.proveedores.filter(t => t.id !== id);
          this.toastr.success("El proveedor se ha eliminado correctamente.")
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
