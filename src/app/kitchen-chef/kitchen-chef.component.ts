import { Component, OnInit,OnDestroy } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { StockSerService } from '../services/stock-ser.service';
import { Item } from '../admin/item/item';
import { ItemSerService } from '../services/item-ser.service';
import { Router } from '@angular/router';
import { OrdertempserviceService } from '../services/ordertempservice.service';
import { Ordertemp } from '../captain/ordertemp';
import { Order } from '../captain/order';
import { OrderItem } from '../cashier/orderitem';
import { Updatestock } from './updatestock';
import { Stock } from '../admin/stock/stock';
import { timer,Observable } from "rxjs";

@Component({
  selector: 'app-kitchen-chef',
  templateUrl: './kitchen-chef.component.html',
  styleUrls: ['./kitchen-chef.component.css']
})
export class KitchenChefComponent implements OnInit,OnDestroy {

  Orderarr:OrderItem[]=[];
  processarr:OrderItem[]=[];
 // order:Order[]=[];
  flag:boolean=false;
  itemarr:Item[]=[];
  itemname:string="";
  itemID:number;
  itemqty:number=0;
  itemqtyarr:number[]=[1,2,3,4,5,6,7,8,9,10];
  k:number=0;
  status:string="process";
  status1:string="served";
  temparr:OrderItem[]=[];
  ingredient:string[]=[];
  str:string;
  servedarr:OrderItem[]=[];
  updatearr:Item[]=[];
  updateingredientarr:Updatestock[]=[];
  date1:Date=new Date();
  private timerSubscription: any;
  private ordertempSubscription: any;
  private orderstatusSubscription:any;
  private orderstatusSubscription1:any;

  constructor(private _ordertempser:OrdertempserviceService,private _order:OrderserviceService,private _stock:StockSerService,private _item:ItemSerService,private _route:Router) { }

  ngOnDestroy(): void{
    if (this.ordertempSubscription) {
      this.ordertempSubscription.unsubscribe();
    }
    if (this.orderstatusSubscription) {
      this.orderstatusSubscription.unsubscribe();
    }
    if (this.orderstatusSubscription1) {
      this.ordertempSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.refreshData();
    this._item.getItemByNOTID(1).subscribe(
      (data:Item[])=>{
        this.itemarr=data;
      }
    );
    }
    subscribeToData(){

      this.timerSubscription = timer(30000)
      .subscribe(() => this.refreshData());
    }
    private refreshData(): void {
      this.ordertempSubscription = this._ordertempser.getAllOrder().subscribe(
        (data: OrderItem[]) => {
          this.Orderarr = data;
        },
        function (error) {
          console.log(error);
        },
        function () {
          console.log("complete ordertemp");
        }
      );

      this.orderstatusSubscription = this._order.getOrderByStatus("process").subscribe(
        (data:OrderItem[])=>{
          this.processarr=data;
        },
        function (error) {
          console.log(error);
        },
        function () {
          console.log("complete process order");
        }
      );

      this.orderstatusSubscription1 = this._order.getOrderByStatus("served").subscribe(
        (data:OrderItem[])=>{
          this.servedarr=data;
        },
        function (error) {
          console.log(error);
        },
        function () {
          console.log("complete served");
        }
      );
      this.subscribeToData();
     }
  onAccept(item, i){
      //this._ordertempser.updateOrder(new Ordertemp(item.FKItemID,item.OrderQty,item.OrderPRICE,this.status,item.TableNO,item.FKEmpID,item.OrderREMARK,item.OrderID)).subscribe(
        // (data:any)=>{
             this._order.addOrder(new Order(item.FKItemID,item.OrderQty,item.OrderPRICE,this.status,item.TableNO,item.FKEmpID,item.OrderREMARK)).subscribe(
                (data:any)=>{
                  this._ordertempser.deleteOrder(item.OrderID).subscribe(
                    (data:any)=>{
                      this.processarr.push(item);
                      this.Orderarr.splice(this.Orderarr.indexOf(item),1);
                    }
                  )
                }
           );
       // }
      //);

  }
  onProcess(item, i){
    console.log(item);
    this._order.updateOrder(new Order(item.FKItemID,item.OrderQty,item.OrderPRICE,this.status1,item.TableNO,item.FKEmpID,item.OrderREMARK,item.OrderID)).subscribe(
      (data:any)=>
      {
        this.servedarr.push(item);
        if(item.fkCategoryID==1){
          console.log("un piz");
        }
        else{
          this._item.getItemById(item.itemID).subscribe(
            (data:Item[])=>{
              this.updatearr=data;
              //console.log(this.updatearr);
              this.str=this.updatearr[0].itemINGREDIENTS+"0";
             // console.log(this.str);
              this.ingredient=this.str.split("|");
              //console.log(this.ingredient);
              for(let i=0;i<this.ingredient.length-1;i+=2){
                this.updateingredientarr.push(new Updatestock(parseInt(this.ingredient[i]),parseInt(this.ingredient[i+1])));
              }
              console.log(this.updateingredientarr);
              this._stock.updateAndAlertStock(this.updateingredientarr).subscribe(
                (data:Stock[])=>{
                  console.log(data);
                }
              );
             }
          );
        }

       this.processarr.splice(this.processarr.indexOf(item),1);

      }
    );

  }
  retToPen(item, i)
  {

    this._ordertempser.addOrder(new Ordertemp(item.FKItemID,item.OrderQty,item.OrderPRICE,"pending",item.TableNO,item.FKEmpID,item.OrderREMARK)).subscribe(
      (data:any)=>{

        this.Orderarr.push(new OrderItem(item.OrderID,item.FKItemID,item.OrderQty,item.OrderPRICE,item.OrderStatus,item.TableNO,item.FKEmpID,item.OrderREMARK,item.itemID,item.itemNAME,item.itemPRICE,item.itemINGREDIENTS,item.itemIMG,item.fkCategoryID,item.itemPREPARETIME,item.itemTYPE));
        this._order.deleteOneOrder(item.OrderID).subscribe(
          (data:any)=>{
            this.processarr.splice(this.processarr.indexOf(item),1);

            }
        )
        }
     );

    }
  onAddExtraItem(){
      this.flag=true;
  }
  onAddStock(){

    this._item.getItemById(this.itemID).subscribe(
      (data:Item[])=>{
        this.updatearr=data;
        //console.log(this.updatearr);
        this.str=this.updatearr[0].itemINGREDIENTS+"0";
       // console.log(this.str);
        this.ingredient=this.str.split("|");
        //console.log(this.ingredient);
        for(let i=0;i<this.ingredient.length-1;i+=2){
          let qty=parseInt(this.ingredient[i+1])*this.itemqty;
          console.log(qty);
          this.updateingredientarr.push(new Updatestock(parseInt(this.ingredient[i]),qty));
        }
        console.log(this.updateingredientarr);
        this._stock.updateAndAlertStock(this.updateingredientarr).subscribe(
          (data:Stock[])=>{
            console.log(data);
            this.itemqty=0;
            this.itemID=0;
            this.flag=false;
          }
        );
       }
    );

  }
  onAddOnOff()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onlogout(){
    this._route.navigate(['']);
  }


}
