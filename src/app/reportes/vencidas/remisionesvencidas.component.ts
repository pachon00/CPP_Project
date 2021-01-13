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
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';


@Component({
  templateUrl: './remisionesvencidas.component.html',
  styleUrls: ['./remisionesvencidas.component.css']
})
export class RemisionesVencidasComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  public dtOptions: any={}; //DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : RemisionesVencidas[] = [];
  public dataBack : RemisionesVencidas[] = [];
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
    })
    this.tipoprovedorService.getTipoProveedor().subscribe( data=> {
      this.tipoprovedor = data;
    });
    this.sucursalService.getSucursal().subscribe( sucursales => {
      this.sucursales = sucursales;
  })

    this.service.getRemisionesVencidas(this.proveedorId, this.sucursalId).subscribe( data=> {
      this.data$ = data;
      this.dataBack = data;
      this.dtTrigger.next();
    })

    this.dtOptions = {
      columns:[{
        title: 'Num Remisión',
        data: 'remision_id',
      },{
        title: 'Sucursal',
        data: 'sucursal',
      },{
        title: 'Proveedor',
        data: 'proveedor',
      },{
        title: 'Forma Pago',
        data: 'forma_pago',
      },{
        title: 'Fecha Alta',
        data: 'fecha_alta',
      },{
        title: 'Fecha Crédito',
        data: 'fecha_credito',
      },{
        title: 'Días Para Vencer',
        data: 'dias_vencimiento',
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

  public buscarVencidos() : void {
    this.service.getRemisionesVencidas(this.proveedorId, this.sucursalId).subscribe( data=> {
      this.data$ = data;
      this.dataBack = data;
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
