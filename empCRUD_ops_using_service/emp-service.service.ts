import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  empArray:any[] =  [];
  url:string  = "http://localhost:3000/emps";

  constructor(private httpObj:HttpClient) { }

  getData():Observable<any[]>
  {
      return this.httpObj.get<any[]>(this.url);
  }

  getDataById(eid:number) : Observable<any>
  {
    return this.httpObj.get<any>(`${this.url}/${eid}`);
  }

  addData(empObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, empObj);
  }

  updateData(empObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + empObj.eid, empObj);
  }

  deleteData(eid:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${eid}`);
  }
}
