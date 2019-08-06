import { Component, OnInit } from "@angular/core";
import { ItemSerService } from "src/app/services/item-ser.service";
import { CategorySerService } from "src/app/services/category-ser.service";
import { Category } from "src/app/admin/category/category";
import { Item } from "src/app/admin/item/item";
import { OrderserviceService } from "../services/orderservice.service";
import { Order } from "./order";
import { Router } from "@angular/router";
import { OrdertempserviceService } from "../services/ordertempservice.service";
import { Ordertemp } from "./ordertemp";

@Component({
  selector: "app-captain",
  templateUrl: "./captain.component.html",
  styleUrls: ["./captain.component.css"]
})
export class CaptainComponent implements OnInit {
  constructor(
    private _ordertempser: OrdertempserviceService,
    private _route: Router,
    private _categorySer: CategorySerService,
    private _itemSer: ItemSerService,
    private _orderser: OrderserviceService
  ) {}
  category: Category[] = [];
  item: Item[] = [];
  itemarr: Item[] = [];
  itemarr1: Item[] = [];
  qty: number[] = [];
  price: number[] = [];
  remarkarr: string[] = [];
  item_id: number[] = [];
  total: number;
  i: number;
  qtyarr: number[] = [];
  flag: boolean = false;
  flag1: boolean = true;
  id: number = 1;
  itemradio: string = "REGULAR";
  cateType: string = "REGULAR";
  jainarr: Item[] = [];
  catid: number;
  firstcatid: number;
  typeflag: boolean = true;
  unlimitedflag: boolean = true;
  alacateflag: boolean = true;
  preferid: number;
  regulararr: Item[] = [];

  typearr: string[] = ["REGULAR", "JAIN"];
  tableNO: number = 0;
  tableNOarr: number[] = [];
  serType: string[] = ["Unlimited", "A la carte"];
  type1: string = "Unlimited";

  public OrerID: number;
  public FKItemID: number;
  public OrderQty: number;
  public OrderPRICE: number;
  public OrderStatus: string;
  public TableNO: number;
  public FKEmpID: string = "";
  public OrderREMARK: string = "";
  orderarr: Order[] = [];
  orderarr1: Order[] = [];
  i1:number;

  ngOnInit() {
    this.type1 = "Unlimited";
    this.unlimitedflag = true;
    this.alacateflag = false;
    for (let i = 1; i <= 12; i++) {
      this.tableNOarr.push(i);
    }
    this._categorySer.getAllCategory().subscribe((data: any) => {
      this.category = data;
      this.catid = data[0].CategoryID;
      this.firstcatid = this.catid;
      this.preferid = this.firstcatid;
      this._itemSer
        .getItemByType(this.itemradio, this.catid)
        .subscribe((data: any) => {
          this.item = data;
        });
    });

    for (this.i = 1; this.i <= 10; this.i++) {
      this.qtyarr.push(this.i);
    }
  }
  onCategoryClick(id) {
    this.catid = id;
    this._itemSer
      .getItemByType(this.itemradio, this.catid)
      .subscribe((data: any) => {
        this.item = data;
      });
  }
  ontypechange(item) {
    this.itemradio = item;
    this._itemSer
      .getItemByType(this.itemradio, this.preferid)
      .subscribe((data: any) => {
        this.item = data;
      });
  }
  onpreferencechange(item) {
    if (item == "Unlimited") {
      this.unlimitedflag = true;
      this.alacateflag = false;
      this.preferid = this.firstcatid;
      this._itemSer
        .getItemByType(this.itemradio, this.preferid)
        .subscribe((data: any) => {
          this.item = data;
        });
    } else {
      this.unlimitedflag = false;
      this.alacateflag = true;
      this.preferid = this.category[1].CategoryID;
      this._itemSer
        .getItemByType(this.itemradio, this.preferid)
        .subscribe((data: any) => {
          this.item = data;
        });
    }
  }
  onItem(item) {
    if (item.fkCategoryID == this.firstcatid) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    if (this.itemarr.find(x => x.itemID == item.itemID)) {
      alert("Already Exits");
    } else {
      //console.log(item);
      this.itemarr.push(item);
      this.qty.push(1);
      this.price.push(item.itemPRICE);
      this.OrderStatus="pending";
      this.remarkarr.push(" ");
      this.item_id.push(item.itemID);
      this.total = 0;
      for (this.i = 0; this.i < this.price.length; this.i++) {
        this.total += this.price[this.i];
      }
    }
  }
  onselectChange(item, i) {
    this.price[i] = this.qty[i] * item.itemPRICE;

    this.total = 0;
    for (this.i = 0; this.i < this.price.length; this.i++) {
      this.total += this.price[this.i];
    }
  }
  onDel(item, i) {
    this.total = this.total - this.price[i];
    this.itemarr.splice(this.itemarr.indexOf(item), 1);
    this.qty.splice(i, 1);
    this.price.splice(i, 1);
    this.remarkarr.splice(i, 1);
    this.item_id.splice(i, 1);
    this.total = 0;
    for (this.i = 0; this.i < this.price.length; this.i++) {
      this.total += this.price[this.i];
    }
  }
  onAddToOrder() {
    for (this.i = 0; this.i < this.itemarr.length; this.i++) {
      // this._orderser.addOrder(new Order(this.item_id[this.i],this.qty[this.i],this.price[this.i],this.OrderStatus,this.tableNO,localStorage.getItem("email"),this.remarkarr[this.i])).subscribe(
      //   (data: any) => {
      //     console.log(data);
      //     this.orderarr.push(new Order(this.item_id[this.i],this.qty[this.i],this.price[this.i],this.OrderStatus[this.i],this.tableNO,localStorage.getItem('email'),this.remarkarr[this.i],data.insertId));
      //     this.orderarr=data;
      //   });
      this._ordertempser.addOrder(new Ordertemp(this.item_id[this.i],this.qty[this.i],this.price[this.i],this.OrderStatus,this.tableNO,localStorage.getItem("email"),this.remarkarr[this.i])).subscribe(
        (data: any) => {
          console.log(data);
        });
    }
    alert("Added");
    this.itemarr.splice(0,this.itemarr.length);
    console.log(this.itemarr);
     this.total=0;
    this.tableNO=0;
    /* for(this.i1=0;this.i1<this.itemarr.length;this.i1++)
    {
      this.itemarr.pop();
    }
     */

  }
  onlogout() {
    this._route.navigate([""]);
  }
  onselecttable() {}
  onGenrateBill() {}
  onPast()
  {
      this._route.navigate(['pastorder']);
  }
}
