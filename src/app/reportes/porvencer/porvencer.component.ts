import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Proveedor } from 'src/app/model/administration/Proveedor.model';
import { Sucursal } from 'src/app/model/administration/Sucursal.model';
import { ProveedorService } from 'src/app/services/administration/proveedores.service';
import { SucursalService } from 'src/app/services/administration/sucursal.service';
import { RemisionesVencidas } from '../../model/reportes/remisionesvencidas.model';
import { ReportesService } from '../../services/reportes/reportes.service';


@Component({
  templateUrl: './porvencer.component.html',
  styleUrls: ['./porvencer.component.css']
})
export class PorVencerComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : RemisionesVencidas[] = [];
  public proveedores : Proveedor[];
  public sucursales: Sucursal[];
  public proveedorId: number = 0;
  public sucursalId: number = 0;


  constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private proveedorService : ProveedorService,
    private sucursalService :SucursalService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.proveedorService.getProveedor().subscribe( data => {
        this.proveedores = data;
    });

    this.sucursalService.getSucursal().subscribe( sucursales => {
      this.sucursales = sucursales;
      console.log(sucursales);
  });

  this.service.getRemisionesPorVencer(this.proveedorId, this.sucursalId).subscribe( data=> {
    this.data$ = data;
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


public buscarPorVencer() : void {
  this.service.getRemisionesPorVencer(this.proveedorId, this.sucursalId).subscribe( data=> {
    this.data$ = data;
    this.rerender();
  });
}

public changeSucursal(event :any) : void {
  this.sucursalId = +event.srcElement.value;
}

public changeProveedor(event :any) : void {
  this.proveedorId = +event.srcElement.value;
}


}
