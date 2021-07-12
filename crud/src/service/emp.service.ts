import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/posts";
  // url = "http://dummy.restapiexample.com/api/v1/employees";
  
  getEmp(){
   return this._http.get(this.url);
  }

  createEmp(data){
    // console.log(data);
    return this._http.post(this.url,data);
  }

  getCurrent(id){
    return this._http.get(`${this.url}/${id}`);
  }
  
  updateEmp(id,data){
    return this._http.put(`${this.url}/${id}`,data)
  }

  deleteEmp(id){
    return this._http.delete(`${this.url}/${id}`);
  }
}
