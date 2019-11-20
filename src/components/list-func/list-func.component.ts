import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-list-func",
  templateUrl: "./list-func.component.html",
  styleUrls: ["./list-func.component.css"]
})
export class ListFuncComponent implements OnInit {
  public staffs: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.http.get("http://localhost:5000/v1/staff").subscribe(
      respose => {
        this.staffs = respose;
        console.log(respose);
      },
      error => {
        console.log(error);
      }
    );
  }
}
