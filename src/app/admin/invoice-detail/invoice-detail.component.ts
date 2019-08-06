import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { InvoicedetailSerService } from 'src/app/services/invoicedetail-ser.service';
import { InvoiceDetail } from './invoicedetail';
import { ItemInInvd } from './iteminvinvd';


@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  id:number[]=[];
  j:number=0;
  InvoiceDetarr:ItemInInvd[]=[];
  InvoiceDATE:Date;
  dataSource=new MatTableDataSource();
  displayedColumns:string[]=['No','ItemNAME','PRICE','QTY','TOTAL'];
  InvoiceID:number;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public _ser:InvoicedetailSerService,public _send:Router,public _Arout:ActivatedRoute) { }

  ngOnInit() {
    this.InvoiceID=this._Arout.snapshot.params['invoiceID'];
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;

    this._ser.getInvoiceDetailById(this.InvoiceID).subscribe(
      (data:ItemInInvd[])=>{
        this.InvoiceDATE=data[0].InvoiceDATE;
        this.InvoiceDetarr=data;
        this.dataSource.data=this.InvoiceDetarr;
        }
    );

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
