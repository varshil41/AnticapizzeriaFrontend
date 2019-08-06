import { Component,OnInit,ViewChild } from '@angular/core';
import { InvoiceSerService } from '../../services/invoice-ser.service';
import { Invoice } from '../../admin/invoice/invoice';
import { Router } from "@angular/router";
import { OrderItem } from '../orderitem';
import { OrderserviceService } from '../../services/orderservice.service';
import { InvoiceDetail } from '../../admin/invoice-detail/invoicedetail';
@Component({
  selector: 'app-cashierinvoice',
  templateUrl: './cashierinvoice.component.html',
  styleUrls: ['./cashierinvoice.component.css']
})
export class CashierinvoiceComponent implements OnInit {
  billarr:any;
  billdetail:InvoiceDetail[]=[];
  flag:boolean;
  grandtotal:number;
  message:string="";
  tableNo:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  TableNo:number;
  table:number;
  date=new Date;
  invoiceNo:number;
  itemName:string;
  OrderQty:number;
  OrderPrice:number;
  OrderTotal:number;
  length=0;
  subtotal:number;
  constructor(private _ser:OrderserviceService , private _send:Router,private _invoice:InvoiceSerService) { }

  ngOnInit() {
  }
  onReject(){
    this.flag=true;
  }
  onTableClick(item){
    this.TableNo=item;
    this.table=item;
    this._invoice.getInvoiceByTable(item).subscribe(
       (data:any)=>{
         console.log(data);
        if(data.length>0)
        {
        this.length=1;
        this.flag=true;
        this.billarr=data;
        this.subtotal = data[0].InvoiceAMOUNT;
        this.grandtotal = data[0].InvoiceAMOUNT-50;
      }
      else{
        this.flag=false;
        this.message = "There is no records of Table No : " + item;
      }
      }
    )
  }
  onBill(){
     /*  this._invoice.addInvoice(new Invoice(this.grandtotal,this.TableNo,"cash")).subscribe(
        (data:any)=>{
          alert('added');
          for(let i=0;i<this.orderitem.length;i++){
          //  this.billdetail.push(new InvoiceDetail());
          }
          console.log(this.billdetail);
        }

      )
   */  }
 /*    for(let i=0;i<this.orderitem.length;i++){
      this.billdetail.push(new InvoiceDetail(i,this.orderitem[i].OrderQty,this.orderitem[i].itemPRICE,1,this.orderitem[i].FKItemID));
    }
    console.log(this.billdetail);
    let date1:Date=new Date();
    this.billarr.push(new Invoice(1,date1,this.grandtotal,this.table,"cash",this.billdetail));
   console.log(this.billarr);
    this._invoice.addInvoice(this.billarr).subscribe(
      (data:any)=>{
        this._send.navigate(['printbill']);
      }
    );
  } */
}
