import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Proveedor } from 'src/app/model/administration/Proveedor.model';
import { Sucursal } from 'src/app/model/administration/Sucursal.model';
import { TipoProveedor } from 'src/app/model/administration/TipoProveedor.model';
import { ProveedorService } from 'src/app/services/administration/proveedores.service';
import { SucursalService } from 'src/app/services/administration/sucursal.service';
import { TipoProveedorService } from 'src/app/services/administration/tipo-proveedor.service';
import { authService } from 'src/app/services/auth/auth.service';
import { RemisionesVencidas } from '../../model/reportes/remisionesvencidas.model';
import { ReportesService } from '../../services/reportes/reportes.service';


@Component({
  templateUrl: './porvencer.component.html',
  styleUrls: ['./porvencer.component.css']
})
export class PorVencerComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  private dtElement: DataTableDirective;

  public dtOptions: any = {};//DataTables.Settings = {};

  public dtTrigger: Subject<any> = new Subject();
  public closeResult: string = '';
  public data$ : RemisionesVencidas[] = [];
  public proveedores : Proveedor[];
  public tipoprovedor : TipoProveedor[];
  public sucursales: Sucursal[];
  public proveedorId: number = 0;
  public tipoprovedorId: number = 0;
  public sucursalId: number = 0;
  //public dtOptions: any;
  public selectedSupplier: number = 0;
  public selectedSupplierType: number = 0;
  public selectedPayType: number = 0;
  public mostrarSucursal : boolean = true;

  constructor(private router: Router,
    private modalService: NgbModal,
    private service : ReportesService,
    private proveedorService : ProveedorService,
    private sucursalService :SucursalService,
    private tipoprovedorService: TipoProveedorService,
    private authServ : authService,
    private toastr: ToastrService) {

      let usuario =  this.authServ.getLoggedUser();
      if (usuario) {
        if (usuario.rol.id !== 1) {
            this.sucursalId = usuario.sucursal.id;
            this.mostrarSucursal = false;
        }
      }
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
  });

  this.service.getRemisionesPorVencer(this.proveedorId, this.sucursalId).subscribe( data=> {
    this.data$ = data;
    this.dtTrigger.next();
  });

  this.dtOptions = {
                    columns:[{
                      title: 'Num Remisión',
                      data: 'data.remision_id',
                    },{
                      title: 'Sucursal',
                      data: 'data.sucursal',
                    },{
                      title: 'Proveedor',
                      data: 'data.proveedor',
                    },{
                      title: 'Forma Pago',
                      data: 'data.forma_pago',
                    },{
                      title: 'Fecha Alta',
                      data: 'data.fecha_alta',
                    },{
                      title: 'Fecha Crédito',
                      data: 'data.fecha_credito',
                    },{
                      title: 'Días Para Vencer',
                      data: 'data.dias_vencimiento',
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

public changeTproveedor( event : any) : void {
  this.tipoprovedorId = +event.srcElement.value;
}

async filterTypeOfSupplier(event, src){
  if(src==='SupplierType'){
    if(event.target.value!=0){
      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.proveedores = data;
        this.proveedores = this.proveedores.filter(x=>x.tipo_proveedor_id==event.target.value);
        console.log(this.proveedores);
      });
    }else{
      this.proveedorService.getProveedor().subscribe((data:Proveedor[])=>{
        this.proveedores = data;
      });
    }
   }
  }



}
