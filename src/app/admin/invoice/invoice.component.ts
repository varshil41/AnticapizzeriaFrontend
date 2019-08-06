import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { Router } from '@angular/router';
import { InvoiceSerService } from 'src/app/services/invoice-ser.service';
import { Invoice } from './invoice';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  Invoicearr:Invoice[]=[];
  dataSource=new MatTableDataSource();
  displayedColumns:string[]=['InvoiceDATE','InvoiceAMOUNT','TableNO','Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _invoiceser:InvoiceSerService,public _send:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
    this._invoiceser.getAllInvoice().subscribe(
      (data:Invoice[])=>{
        this.Invoicearr=data;
        this.dataSource.data=this.Invoicearr;
      }
    );
  }
  onDetails(invoiceID){
      this._send.navigate(['menu/invoicedetail',invoiceID]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
