import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs'
import { Usuario } from '../model/usuario/usuario.model';
import { UsuarioService } from '../services/usuarios/usuario.service';

@Component({

  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data : Usuario[] = []

  constructor(
    private router: Router,
    private toastr : ToastrService,
    private activatedRoute: ActivatedRoute,
    private usuarioService : UsuarioService,
    private modalService: NgbModal)
  { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
      .subscribe(
        data => {
          this.data = data;
          this.dtTrigger.next();
        },
        error => {
          this.toastr.error(error);
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


  public nuevoUsuario(): void {
    this.router.navigate(['usuarios/usuarios/nuevo'])
  }

  public editarUsuario(usuarioId: number): void { }


  private eliminarUsuario(usuarioId: number): void {
    this.usuarioService.eliminarUsuario(usuarioId)
      .subscribe(_ => {
        this.data = this.data.filter(t => t.id !== usuarioId);
        this.toastr.success("El usuario se ha eliminado correctamente.")
      },
        error => {
          this.toastr.error(error)
        });
  }


  public open(content, id): void {
    console.log(id);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.eliminarUsuario(id)
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
