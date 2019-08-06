import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicedetailSerService {
  private invoicedetail_url:string="http://localhost:3000/invoicedetail/";
  constructor(private _http:HttpClient) { }
  getInvoiceDetailById(id){

    return this._http.get(this.invoicedetail_url+id);
  }
}
