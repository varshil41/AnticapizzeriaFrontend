import { Component,OnInit ,ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog,MAT_DIALOG_DATA } from "@angular/material";
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { OrderItem } from 'src/app/cashier/orderitem';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { Router } from '@angular/router';
import { Charity } from '../charity-admin/charity';
import { CharityserviceService } from 'src/app/services/charityservice.service';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';
import { Sendemail } from 'src/app/forgetpassword/sendemail';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { Stock } from '../stock/stock';
import { InvoiceSerService } from 'src/app/services/invoice-ser.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})


export class AdminHomeComponent {
  /** Based on the screen size, switch from standard to one column per row */

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  paginator1: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  sort1: MatSort;
  charity:Charity[]=[];
  order:OrderItem[]=[];
  stockarr:Stock[]=[];
  totalcash:number;
  totalcard:number;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  displayedColumns: string[] = ["item","qty","price","tableNo"];
  dataSource1=new MatTableDataSource();
  displayedColumns1:string[]=['StockNAME','StockQTY','StockALERT'];
  date1:Date=new Date();
  constructor(private _route:Router,private breakpointObserver: BreakpointObserver,private _ser:OrderserviceService,private _ser1:EmployeeSerService,private _charityser:CharityserviceService,private _stock:StockSerService,private _invser:InvoiceSerService) {}
  onclick(){
    this._route.navigate(['menu/order']);
  }
  ngOnInit()
  {
    console.log(this.date1.toDateString());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
    this.getAllOrder();
    this.oncharity();
    this.onclickstock();
    this.onTodayPay();
  }
  getAllOrder()
  {
    this._ser.getOrderByStatus("process").subscribe(
      (data:any)=>{
        this.order=data;
        this.dataSource.data=this.order;
      }
    )
  }
  onclickstock(){
    this._stock.getAlertstock().subscribe(
      (data:Stock[])=>{
        this.stockarr=data;
        this.dataSource1.data=this.stockarr;
      }
    );
  }
  oncharity()
  {
    this._charityser.getAllCharity().subscribe(
      (data:any)=>{
        this.charity=data;
      }
    )
  }
  onsend(item){
    console.log(item);
    this._ser1.sendMail(new Sendemail(item,"ANTICA PIZZERIA","Collect the leftover Food")).subscribe(
      (data:any)=>{
      alert("Mail has been Sent");
      }
    )
  }
  onTodayPay()
  {
    this._invser.getInvoiceByMode("card").subscribe(
      (data:any)=>{
        this.totalcard=data[0].total;
        console.log(data);
        console.log(this.totalcard);
      }
    );
    this._invser.getInvoiceByMode("cash").subscribe(
      (data:any)=>{
        this.totalcash=data[0].total;
      }
    );
  }
  onMonPay()
  {

  }
  onYerPay()
  {

  }
}
