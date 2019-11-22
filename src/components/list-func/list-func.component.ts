import { Component, OnInit } from "@angular/core";
import { StaffService } from "../../services/Staff.service";
import { Staff } from "src/model/Staff";

@Component({
  selector: "app-list-func",
  templateUrl: "./list-func.component.html",
  styleUrls: ["./list-func.component.css"]
})
export class ListFuncComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _filtro: string;
  get filtro(): string {
    return this._filtro;
  }
  set filtro(value: string) {
    this._filtro = value;
    this.filtraStaff = this.filtro
      ? this.filtraStaffs(this.filtro)
      : this.staffs;
  }

  public filtraStaff: Staff[];
  public staffs: any;
  public imgAltura = 50;
  public imgLargura = 100;
  constructor(private http: StaffService) {}

  ngOnInit() {
    this.getFuncionarios();
  }

  filtraStaffs(filtraPor: string): Staff[] {
    filtraPor = filtraPor.toLocaleLowerCase();
    return this.staffs.filter(x => {
      return x.name.toLocaleLowerCase().indexOf(filtraPor) !== -1;
    });
  }

  getFuncionarios() {
    this.http.getStaffs().subscribe(
      (Staffs: Staff[]) => {
        this.staffs = Staffs;
        console.log(Staffs);
      },
      error => {
        this.staffs.push({
          id: 1,
          name: "alexandre jose",
          function: "Ceo",
          rg: 91
        });
        console.log(error);
      }
    );
  }
}
