import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Remision } from '../../model/remision/remision.model';
import { AltaRemision } from '../../model/remision/remisionAlta.model';
import { RemisionService } from '../../services/remisiones/remision.service';

@Component({
  templateUrl: './remisiones.component.html',
  styleUrls: ['./remisiones.component.css']
})
export class RemisionesComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data : Remision[] = [];


  constructor(private router: Router,
    private modalService: NgbModal,
    private service : RemisionService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.service.getRemision().subscribe( data=> {
      this.data = data;
      console.log(data);
      this.dtTrigger.next();
    })
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

  public eliminarRemision(remisionId : number) : void {
    // this.service.eliminarTipoProveedor(this.tipoProveedorId)
    //     .subscribe( _ => {
    //       this.tipoProvedores = this.tipoProvedores.filter(t => t.id !== this.tipoProveedorId);
    //       this.toastr.success("El tipo de proveedor se ha eliminado correctamente.")
    //     },
    //     error => {
    //       this.toastr.error(error)
    // });
}

public nuevaRemision() : void {
  this.router.navigate(['remisiones/remisiones/nuevo']);
}

public open(content, remisionId) : void {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.eliminarRemision(remisionId)
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
