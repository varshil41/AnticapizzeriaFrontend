import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Stock } from '../admin/stock/stock';
import { Updatestock } from '../kitchen-chef/updatestock';

@Injectable({
  providedIn: 'root'
})
export class StockSerService {
  private stock_url:string="http://localhost:3000/stock/";
  private stock1_url:string="http://localhost:3000/stock1/";
  private getstockbyin_url:string="http://localhost:3000/getstockbyin/";
  private alertstock_url:string="http://localhost:3000/updatealertstock/";
  constructor(private _http:HttpClient) { }

  getAllStock(){
    return this._http.get(this.stock_url);
  }
  getAlertstock(){
    return this._http.get(this.alertstock_url);
  }
  GetStockById(id){
    return this._http.get(this.stock_url+id);
  }
  getStockByIn(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getstockbyin_url,body,{headers:head1});
  }
  deleteAllStock(item:Stock[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.stock1_url,body,{headers:head1});
  }

  insertStock(item:Stock){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.stock_url,body,{headers:head1});
  }


  deleteStock(id){
    return this._http.delete(this.stock_url+id);
  }

  updateStock(item:Stock){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.stock_url,body,{headers:head1});

  }
  updateAndAlertStock(item:Updatestock[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.alertstock_url,body,{headers:head1});
  }
}
