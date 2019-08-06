import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../captain/order';
import { Ordertemp } from '../captain/ordertemp';

@Injectable({
  providedIn: 'root'
})
export class OrdertempserviceService {
  private url:string="http://localhost:3000/ordertemp/";
  private url1:string="http://localhost:3000/ordertemp1/";

  constructor(private _http:HttpClient) { }
  getAllOrder(){
    return this._http.get(this.url);
  }
  addOrder(item:Order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  updateOrder(item:Order){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }

  getOrderTempByTableno(no)
  {
    return this._http.get(this.url+no);
  }
  getOrderByStatus(status)
  {
    return this._http.get(this.url1+status);
  }
  deleteOrder(id:number){
    return this._http.delete(this.url+id);
  }
  updateqtyremarkorder(item:Ordertemp){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url1,body,{headers:head1});
  }

}
