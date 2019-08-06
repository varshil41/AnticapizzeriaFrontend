import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  MatTableDataSource,MatSort,MatPaginator  } from '@angular/material';
import { Item } from './item';
import { ItemSerService } from 'src/app/services/item-ser.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  dataSourceofItem=new MatTableDataSource();
  displayedColumnsofItem:string[]=['checkbox','itemNAME','itemPRICE','categoryNAME','itemTYPE','Action'];
  delitem:Item[]=[];
  itemarr:Item[]=[];
  expandedElement;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _send:Router,private _item:ItemSerService) { }

  ngOnInit() {
    this.dataSourceofItem.paginator=this.paginator;
    this.dataSourceofItem.sort = this.sort;
    this._item.getAllItems().subscribe(
      (data:any)=>{
        this.itemarr=data;
        this.dataSourceofItem.data=data;
      }
    );
  }
  onDeleteAllItem(){
    this._item.deleteAllItem(this.delitem).subscribe(
      (data:any)=>{
        for(let i=0;i<this.delitem.length;i++){
          if(this.itemarr.find(x=>x.itemID==this.delitem[i].itemID)){
            this.itemarr.splice(this.itemarr.indexOf(this.delitem[i]),1);
          }
          this.dataSourceofItem.data=this.itemarr;
        }
      }
    );
  }
  onDeleteOneItem(item){
    if(confirm("Are you sure you want to delete?")){
    this._item.deleteOneItem(item.itemID).subscribe(
      (data:any)=>{
        if(this.itemarr.find(x=>x.itemID==item.itemID)){
          this.itemarr.splice(this.itemarr.indexOf(item),1);
        }
        this.dataSourceofItem.data=this.itemarr;
      }
    );
    }
  }
  onAddnewItem(){
    this._send.navigate(['menu/addnewitem']);
  }
  onEditItem(itemID:string){

    this._send.navigate(['menu/updateitem',itemID]);
  }
  onCheckchange(element:Item){
    if(this.delitem.find(x=>x.itemID==element.itemID)){
      this.delitem.splice(this.delitem.indexOf(element),1);
    }
    else{
      this.delitem.push(element);
    }
  }
  onDetails(itemID:number){
   this._send.navigate(['/menu/itemdetails',itemID]);
  }
  applyFilter(filterValue: string) {
    this.dataSourceofItem.filter = filterValue.trim().toLowerCase();
  }
}
