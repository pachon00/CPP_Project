import { Component, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { Dashboard } from "../model/dashboard/dashboard.model";
import { DashboardService } from "../services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public data : Dashboard[] = [];

  public total : number;
  public proceso : number;
  public pagadas  : number;
  public canceladas : number

  constructor(
      private service: DashboardService,
      private toast : ToastrService
      ) {

  }

  ngOnInit(): void {
    this.service.getDashboard().subscribe( data=> {
          this.data = data;
          this.dtTrigger.next();

          if (data) {
            this.total = data.length;
            this.proceso = this.data.filter(d => d.estado_id == 2).length;
            this.pagadas = this.data.filter(d => d.estado_id == 3).length;
            this.canceladas = this.data.filter(d => d.estado_id == 4).length;
          }
    })

  }



}
