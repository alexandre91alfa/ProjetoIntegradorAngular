import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Staff } from "src/model/Staff";

@Injectable({
  providedIn: "root"
})
export class StaffService {
  baseUrl = "http://localhost:5000/v1";
  constructor(private http: HttpClient) {}

  getStaffs(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.baseUrl}/staff`);
  }

  getStaffsById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.baseUrl}/${id}`);
  }
}
