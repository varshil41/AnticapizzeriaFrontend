import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../captain/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
private url:string="http://localhost:3000/order/";
private url1:string="http://localhost:3000/order1/";

  constructor(private _http:HttpClient) { }
  getAllOrder(){
    return this._http.get(this.url);
  }
  addOrder(item:Order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  getOrderByTableno(no)
  {
    return this._http.get(this.url+no);
  }
  getOrderByStatus(status)
  {
    return this._http.get(this.url1+status);
  }
  updateOrder(item:Order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }
  deleteOrder(item:Order[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head1});
  }
  deleteOneOrder(id){
    return this._http.delete(this.url+id);
  }
}
