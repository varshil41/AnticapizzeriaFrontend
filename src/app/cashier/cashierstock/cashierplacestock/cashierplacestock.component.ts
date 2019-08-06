import { Component, OnInit } from '@angular/core';
import { StockSerService } from 'src/app/services/stock-ser.service';
import {FormControl} from '@angular/forms';
import { Stock } from '../../../admin/stock/stock';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';
import { Sendemail } from 'src/app/forgetpassword/sendemail';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashierplacestock',
  templateUrl: './cashierplacestock.component.html',
  styleUrls: ['./cashierplacestock.component.css']
})
export class CashierplacestockComponent implements OnInit {
  StockTYPE:string='Kg';
  stocktypearr:string[]=['Kg','gram'];
  StockQTY:number;
  StockNAME:string;
  StockQTY2:number;
  itemradio:string;
//  stockname:string[]=[];
  options:string[]=[];
  stockname1:string;
  myControl=new FormControl();
  Stockarr:Stock[]=[];
  StockArr:string[]=[];
  str:string="";
  filteredOptions: Observable<string[]>;
  constructor(private _ser:StockSerService,private _emailser:EmployeeSerService,private _send:Router) { }

  ngOnInit() {

    this.itemradio = 'Kg';
      this._ser.getAllStock().subscribe(
      (data:any)=>{
        for(let i=0;i<data.length;i++)
        {
         this.options.push(data[i].StockNAME);
       //   console.log(this.options[i]);
        }
        this.filteredOptions = this.myControl.valueChanges
       .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      }
    )




    //console.log(this.stockname);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onClickCancel(){

  }
  onPlaceStock(f){
    console.log(this.StockNAME);
    if(this.itemradio=="Kg"){
      this.StockQTY2 = this.StockQTY*1000;
    }
    else{
      this.StockQTY2 = this.StockQTY;
    }
    this.Stockarr.push(new Stock(this.StockNAME,this.StockQTY2));
   // console.log(this.Stockarr);
    this.StockNAME="";
    this.StockQTY=0;
  }
  onstocktype(item){
    this.itemradio = item;
  }
  onfinalplace(){
    for(let i=0;i<this.Stockarr.length;i++)
    {
      this.StockArr.push(this.Stockarr[i].StockNAME+"");
      this.StockArr.push(this.Stockarr[i].StockQTY+"");
    }
    //console.log(this.StockArr+"");
     this.StockQTY=0;
     let str1:string;
      this.str="<html><body><center><h1>Buddy's Pizza</h1><br><h3>Ingrediants Oreder</h3><table border='1' height='60%' width='60%'>";
      this.str+="<tr><th>Ingredient Name</th><th>Ingredient Qty(Kg)</th></tr>";
      for(let i=0;i<this.Stockarr.length;i++)
      {
        str1="<tr><td>"+this.Stockarr[i].StockNAME+"</td><td>"+this.Stockarr[i].StockQTY/1000+"</td></tr>";
        this.str+=str1;
      }
      this.str+="</table></body></html>"
    this._emailser.sendMail(new Sendemail("varshilshah44@gmail.com","Ingredients Order From Buddy's Pizza",this.str
     )).subscribe(
     (data:any)=>{
       console.log(data);
     }
    );
    this._send.navigate(['./menu1/cashierstock']);

  }

}
