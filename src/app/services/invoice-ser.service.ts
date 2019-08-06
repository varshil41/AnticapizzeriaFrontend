import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Invoice } from '../admin/invoice/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSerService {
  private invoice_url:string="http://localhost:3000/invoice/";
  private invoice_url1:string="http://localhost:3000/invoice1/";
  constructor(private _http:HttpClient) { }

  getAllInvoice(){
    return this._http.get(this.invoice_url);
  }
  getInvoiceByTable(Tableno){
    return this._http.get(this.invoice_url+Tableno);
  }
  addInvoice(item:Invoice){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.invoice_url,body,{headers:head1});
  }
  getInvoiceByMode(PaymentMODE)
  {
    return this._http.get(this.invoice_url1+PaymentMODE);
  }
}
