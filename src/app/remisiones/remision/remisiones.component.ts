import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsuarioAutenticado } from '../../model/usuario/usuarioAutenticado.model';
import { authService } from '../../services/auth/auth.service';
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
  public user: UsuarioAutenticado;


  constructor(private router: Router,
    private modalService: NgbModal,
    private service : RemisionService,
    private authServ : authService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.service.getRemision().subscribe( data=> {
      let usuario =  this.authServ.getLoggedUser();
      let temData = data;
      if (usuario) {
        if (usuario.rol.id !== 1) {
          temData = temData.filter( d => d.sucursal_id === usuario.sucursal.id);
        }
      }
      this.data = temData;
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

  public editarRemision(remisionId: number): void {
    this.router.navigate(["remisiones/remisiones/editar", remisionId]);
  }

  public eliminarRemision(remisionId : number) : void {
    this.service.eliminarRemision(remisionId)
      .subscribe(
        _ => {
          this.data = this.data.filter(t => t.id !== remisionId);
          this.toastr.success("La remisión se ha eliminado correctamente.")
        },
        error => {
          this.toastr.error(error)
        }
      )
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
