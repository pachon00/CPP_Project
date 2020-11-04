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
  public sucursales: Sucursal[];
  public proveedorId: number = 0;


 constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private proveedorService : ProveedorService,
    private toastr: ToastrService) {
  }

  ngOnInit() : void {
    this.proveedorService.getProveedor().subscribe( data => {
        this.proveedores = data;
    });

    this.service.getPagoOrdenesProveedor(this.proveedorId).subscribe( data=> {
      this.data$ = data;
      this.dtTrigger.next();
    });

    this.dtOptions = {
      columns:[{
        title: 'Num Orden',
        data: 'data.orden_id',
      },{
        title: 'Proveedor',
        data: 'data.proveedor',
      },{
        title: 'Fecha Alta',
        data: 'data.fecha_alta',
      },{
        title: 'Usuario Alta',
        data: 'data.usuario_alta',
      },{    
        title: 'Fecha Pago',
        data: 'data.fecha_pago',
      },{    
        title: 'Banco',
        data: 'data.banco',
      },{
        title: '# Cheque',
        data: 'data.numero_cheque',
      },{
        title: '# Transferencia',
        data: 'data.numero_transferencia',
      },{
        title: 'Recibe',
        data: 'data.persona_recibe',
      },{
        title: '# Remisiones',
        data: 'data.numero_remisiones',
      }],
      dom: 'Bfrtip',
      buttons: [
        // 'columnsToggle',
        // 'colvis',
        // 'copy',
        // 'print',
        'excel',
        'csv',
      ]
    };


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


  public changeProveedor(event :any) : void {
    this.proveedorId = +event.srcElement.value;
  }


}