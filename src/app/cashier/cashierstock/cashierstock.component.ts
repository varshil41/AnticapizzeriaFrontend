import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { Router } from '@angular/router';
import { Stock } from '../../admin/stock/stock';

@Component({
  selector: 'app-cashierstock',
  templateUrl: './cashierstock.component.html',
  styleUrls: ['./cashierstock.component.css']
})
export class CashierstockComponent implements OnInit {
  stockarr:Stock[]=[];
  delstock:Stock[]=[];
  StockNAME:string;
  StockTYPE:string;
  StockQTY:number;
  StockQTY2:number;
  StockALERT:number;
  StockALERT1:number;
  itemradio:string;
  stocktypearr:string[]=['Kg','gram'];
  flag:boolean=false;
  flagradio:boolean=true;
  dataSource=new MatTableDataSource();
  displayedColumns:string[]=['StockNAME','StockQTY','StockALERT','Action'];

  @ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _stockser:StockSerService,public _rout:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._stockser.getAllStock().subscribe(
      (data:Stock[])=>{
        this.stockarr=data;
        this.dataSource.data=this.stockarr;
      }
    );
  }
  onstocktype(item){
    this.flagradio = false;
    this.itemradio = item;
  }

  onaddstock(){
      if(this.flag){
        this.flag = false;
      }
      else{
        this.flag = true;
      }
  }
  onplaceStock(){
    this._rout.navigate(['menu1/cashierplacestock']);
  }
  onSaveStock(f){
      this.StockALERT1 = this.StockALERT/8;
      if(this.itemradio=="Kg"){
        this.StockQTY2 = this.StockQTY*1000;
      }
      else{
        this.StockQTY2 = this.StockQTY;
      }
      this._stockser.insertStock(new Stock(this.StockNAME,this.StockQTY2,this.StockALERT1)).subscribe(
        (data:Stock[])=>{
          console.log(data);
          alert("added");
          this.flag = false;
          this.ngOnInit();
        }
      )
  }
  onupdatestock(StockID){
    this._rout.navigate(['menu1/stockupdate',StockID]);
  }
  onsingledelete(StockID){
    this._stockser.deleteStock(StockID).subscribe(
      (data:Stock[])=>{
        if(this.stockarr.find(x=>x.StockID==StockID)){
          this.stockarr.splice(this.stockarr.indexOf(StockID),1);
        }
        this.dataSource.data=this.stockarr;

      }
    )
  }
  onDeleteAllStock(){
    this._stockser.deleteAllStock(this.delstock).subscribe(
      (data:any)=>{
        for(let i=0;i<this.delstock.length;i++){
          if(this.stockarr.find(x=>x.StockID==this.delstock[i].StockID)){
            this.stockarr.splice(this.stockarr.indexOf(this.delstock[i]),1);
          }
          this.dataSource.data=this.stockarr;
        }
      }
    );
  }

  onClickCancel(){
    this.flag = false;
  }
  onCheckchange(element:Stock){

    if(this.delstock.find(x=>x.StockID==element.StockID)){
      this.delstock.splice(this.delstock.indexOf(element),1);
    }
    else{
      this.delstock.push(element);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
