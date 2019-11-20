import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

  public filtraStaff: any[] = [];
  public staffs: any = [];
  public imgAltura = 50;
  public imgLargura = 100;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFuncionarios();
  }

  filtraStaffs(filtraPor: string): any {
    filtraPor = filtraPor.toLocaleLowerCase();
    return this.staffs.filter(x => {
      return x.name.toLocaleLowerCase().indexOf(filtraPor) !== -1;
    });
  }

  getFuncionarios() {
    this.http.get("http://localhost:5000/v1/staff").subscribe(
      respose => {
        this.staffs = respose;
        console.log(respose);
      },
      error => {
        this.staffs.push({
          id: 1,
          name: "Alexandre Jose",
          function: "Ceo",
          rg: 24564
        });
        console.log(error);
      }
    );
  }
}
