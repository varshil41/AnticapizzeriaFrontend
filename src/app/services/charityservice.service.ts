import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Charity } from "../admin/charity-admin/charity";
@Injectable({
  providedIn: 'root'
})
export class CharityserviceService {
  private charity_url:string="http://localhost:3000/charity/";
  private deleteallcharity_url:string="http://localhost:3000/deleteallcharity/";
  constructor(private _http:HttpClient) { }
  getAllCharity(){
    return this._http.get(this.charity_url);
  }
  getCharityById(charityID){
    return this._http.get(this.charity_url+charityID);
  }
  deleteOneCharity(id:number){
    return this._http.delete(this.charity_url+id);
  }
  deleteAllCharity(item:Charity[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteallcharity_url,body,{headers:head1});
  }
  addcharity(item:Charity){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.charity_url,body,{headers:head1});
  }
  updatecharity(item:Charity){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.charity_url,body,{headers:head1});
  }
}
