import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog,MAT_DIALOG_DATA } from "@angular/material";
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { OrderItem } from 'src/app/cashier/orderitem';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  order:OrderItem[]=[];
  displayedColumns: string[] = ["index","item","qty","price","tableNo"];

  OrerID:number;
  OrderQty:number;
  OrderPRICE:number;
  TableNO:number;
  itemNAME:string;
  running:OrderItem[]=[];
  upcoming:OrderItem[]=[];
  pastorder:OrderItem[]=[];
  index:number;
  orderarr:string[]=[
    "Running Orders",
    "Upcoming Orders",
    "Past Orders"
  ];

  constructor(private _ser:OrderserviceService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._ser.getOrderByStatus("process").subscribe(
      (data:any)=>{
        this.order=data;
        this.dataSource.data=this.order;
      }
    )
  }
  tabClick(tab) {
    this.index=tab.index;
    console.log(this.index);
    if(this.index==0)
    {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._ser.getOrderByStatus("process").subscribe(
        (data:any)=>{
          this.order=data;
          this.dataSource.data=this.order;
        }
      )
    }
    else if(this.index==1){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._ser.getOrderByStatus("pending").subscribe(
        (data:any)=>{
          this.order=data;
          this.dataSource.data=this.order;
        }
      )
   }
    else if(this.index==2){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._ser.getOrderByStatus("done").subscribe(
        (data:any)=>{
          this.order=data;
          this.dataSource.data=this.order;
        }
      )
    }

  }
}
