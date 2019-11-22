import { Component, OnInit, TemplateRef } from "@angular/core";
import { StaffService } from "../../services/Staff.service";
import { Staff } from "src/model/Staff";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: "app-list-func",
  templateUrl: "./list-func.component.html",
  styleUrls: ["./list-func.component.css"]
})
export class ListFuncComponent implements OnInit {
  public filtraStaff: Staff[];
  public staffs: any;
  public imgAltura = 50;
  public imgLargura = 100;
  // tslint:disable-next-line: variable-name
  _filtro: string;
  modalRef: BsModalRef;

  constructor(
    private http: StaffService,
    private modalService: BsModalService
  ) {}

  get filtro(): string {
    return this._filtro;
  }

  set filtro(value: string) {
    this._filtro = value;
    this.filtraStaff = this.filtro
      ? this.filtraStaffs(this.filtro)
      : this.staffs;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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
