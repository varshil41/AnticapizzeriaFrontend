import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { OrderItem } from 'src/app/cashier/orderitem';
import { Ordertemp } from '../ordertemp';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { InvoiceSerService } from 'src/app/services/invoice-ser.service';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  constructor(private _route:Router,private _orderser:OrderserviceService,private _invoice:InvoiceSerService) { }
  tableNO: number = 0;
  tableNOarr: number[] = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  orderarr:OrderItem[]=[];
  i: number;
  qtyarr: number[] = [];
  qty: number[] = [];
remark:string;
  displayedColumns: string[] = ["index","item","qty","remark"];
  ngOnInit() {
    for (let i = 1; i <= 12; i++) {
      this.tableNOarr.push(i);
    }
    for (this.i = 1; this.i <= 10; this.i++) {
      this.qtyarr.push(this.i);
    }

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onBack()
  {
    this._route.navigate(["captain"]);
  }
  onselectChange(item, i){

  }
  onlogout()
  {
    this._route.navigate(["loginpage"]);
  }
  onselecttable() {
    this.qty.pop();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._orderser.getOrderByTableno(this.tableNO).subscribe(
      (data:OrderItem[])=>{
        this.orderarr=data;
        this.dataSource.data=this.orderarr;
        for(let i=0;i<this.orderarr.length;i++)
        {
              this.qty.push(this.orderarr[i].OrderQty);
        }

      }
    );

  }
  onGenrateBill(){
  /*   console.log(this.orderarr);
    this._invoice.addInvoice(this.orderarr).subscribe(
      (data:any)=>{
        alert("bill added for generation");
        this._orderser.deleteOrder(this.orderarr).subscribe(
          (data:any)=>{
           this.orderarr.splice(0,this.orderarr.length);
           this.dataSource.data=this.orderarr;
           this.tableNO=0;
           console.log(this.orderarr);
          }
        );
      }
    );*/
  }
}
