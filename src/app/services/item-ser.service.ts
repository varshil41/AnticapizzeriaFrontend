import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Item } from '../admin/item/item';


@Injectable({
  providedIn: 'root'
})
export class ItemSerService {
  private item_url:string="http://localhost:3000/item/";
private item1_url:string="http://localhost:3000/item1/";
private item3_url:string="http://localhost:3000/item2/";
private deleteallitem_url="http://localhost:3000/deleteallitem/";

  constructor(private _http:HttpClient) { }
  getAllItems(){
    return this._http.get(this.item_url);
  }
  getItemByType(name,id){
    return this._http.get(this.item3_url+name+"/"+id);
  }
  getItemByNOTID(id){
    return this._http.get(this.item3_url+id);
  }


  deleteAllItem(item:Item[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.deleteallitem_url,body,{headers:head1});
  }
  deleteOneItem(id:number){
    return this._http.delete(this.item_url+id);
  }
  AddNewItem(item:FormData){
    return this._http.post(this.item_url,item);
  }
  getItemByName(name:string){
    return this._http.get(this.item1_url+name);
  }
  getItemById(id:number){
    return this._http.get(this.item_url+id);
  }


  updateItemWithImage(item:FormData){
    return this._http.put(this.item1_url,item);
  }
  updateItem(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.item_url,body,{headers:head1});
  }
}
