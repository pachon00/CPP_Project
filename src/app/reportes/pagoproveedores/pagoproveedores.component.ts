import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Proveedor } from '../../model/administration/Proveedor.model';
import { ProveedorService } from '../../services/administration/proveedores.service';
import { RemisionesVencidas } from '../../model/reportes/remisionesvencidas.model';
import { ReportesService } from '../../services/reportes/reportes.service';
import { SucursalService } from '../../services/administration/sucursal.service';
import { Sucursal } from '../../model/administration/Sucursal.model';
import { PagoProveedores } from 'src/app/model/reportes/pagoproveedores.model';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';


@Component({
  templateUrl: './pagoproveedores.component.html',
  styleUrls: ['./pagoproveedores.component.css']
})
export class PagoProveedoresComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  public dtOptions: any={}; //DataTables.Settings = {};

  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : PagoProveedores[] = [];
  public proveedores : Proveedor[];
  public tipoprovedor : TipoProveedor[];
  public sucursales: Sucursal[];
  public proveedorId: number = 0;
  public tipoprovedorId: number = 0;
  public sucursalId: number = 0;

 constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private proveedorService : ProveedorService,
    private sucursalService :SucursalService,
    private tipoprovedorService: TipoProveedorService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.proveedorService.getProveedor().subscribe( data => {
        this.proveedores = data;
    });
    this.tipoprovedorService.getTipoProveedor().subscribe( data=> {
      this.tipoprovedor = data;
    });
    this.sucursalService.getSucursal().subscribe( sucursales => {
      this.sucursales = sucursales;
      console.log(sucursales);
    });
    this.service.getPagoOrdenesProveedor(this.proveedorId).subscribe( data=> {
      this.data$ = data;
     /* for (let element of this.data$){
        element.banco
      }*/
      this.dtTrigger.next();
    });

    this.dtOptions = {
      columns:[{
        "targets": '_all',
        "defaultContent": "ss"
      }],
      dom: 'Bfrtip',
      buttons: [
        'excel',
        'csv',
      ],
      "searching": true,
    };
    /*this.dtOptions = {
      columns:[{
        title: 'Num Orden',
        data: 'orden_id',
      },{
        title: 'Proveedor',
        data: 'proveedor',
      },{
        title: 'Fecha Alta',
        data: 'fecha_alta',
      },{
        title: 'Usuario Alta',
        data: 'usuario_alta',
      },{
        title: 'Fecha Pago',
        data: 'fecha_pago',
      },{
        title: 'Banco',
        data: 'banco',
      },{
        title: '# Cheque',
        data: 'numero_cheque',
      },{
        title: '# Transferencia',
        data: 'numero_transferencia',
      },{
        title: 'Recibe',
        data: 'persona_recibe',
      },{
        title: '# Remisiones',
        data: 'numero_remisiones',
      }],
      dom: 'Bfrtip',
      buttons: [
        'excel',
        'csv',
      ]
    };*/
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

  public buscarPagoProveedor() : void {
    this.service.getPagoOrdenesProveedor(this.proveedorId).subscribe( data=> {
      this.data$ = data;
      this.rerender();
    })
  }

  public changeSucursal(event :any) : void {
    this.sucursalId = +event.srcElement.value;
  }

  public changeProveedor(event :any) : void {
    this.proveedorId = +event.srcElement.value;
  }

  public changeTproveedor( event : any) : void {
    this.tipoprovedorId = +event.srcElement.value;
  }
}
