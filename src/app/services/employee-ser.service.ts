import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from '../admin/employee/employee';
import { Sendemail } from '../forgetpassword/sendemail';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSerService {
  EmployeeUrl:string="http://localhost:3000/loginemp/";
  SendMailUrl:string="http://localhost:3000/emailvarify/";
  employee_url:string="http://localhost:3000/employee/";
  employee1_url:string="http://localhost:3000/employee1/";
  updatewithimage_url:string="http://localhost:3000/updateWithImage/";

  constructor(public _http:HttpClient) { }

  GetEmployeeByIdPassword(item:Employee){
    let h = new HttpHeaders().set('Content-Type','application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.EmployeeUrl,body,{headers:h})
  }
  ForgotPassword(id){
    return this._http.get(this.EmployeeUrl + id);
  }
  changepass(item){
    let h = new HttpHeaders().set('Content-Type','application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.employee1_url,body,{headers:h})
  }
  sendMail(item:Sendemail){
    let h = new HttpHeaders().set('Content-Type','application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.SendMailUrl,body,{headers:h})
  }
  getAllEmployee(){
    return this._http.get(this.employee_url);
  }
  addEmployee(item:FormData){
    console.log(item);
    return this._http.post(this.employee_url,item);
  }
  updateEmployee(item:Employee){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.employee_url,body,{headers:head1});
  }
  getEmployeeByID(id:string){
    return this._http.get(this.employee_url+id);
  }
  deleteAllEmployee(item:Employee[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.employee1_url,body,{headers:head1});
  }
  deleteOneEmployee(id:string){
    return this._http.delete(this.employee_url+id);
  }
  updateWithImage(item:FormData){
    console.log(item);
    return this._http.put(this.updatewithimage_url,item);
  }
}

