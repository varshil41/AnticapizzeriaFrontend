import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { Stock } from '../../admin/stock/stock';

@Component({
  selector: 'app-stockupdate',
  templateUrl: './stockupdate.component.html',
  styleUrls: ['./stockupdate.component.css']
})

export class StockupdateComponent implements OnInit {
  StockID:number;
  StockNAME:string;
  StockQTY:number;
  StockQTY1:number;
  StockALERT:number;
  StockALERT1:number;
  StockALERT2:number;
  stocktypearr:string[]=['Kg','gram'];
  StockTYPE:string="gram";
  itemradio:string;
  constructor(public _receive:ActivatedRoute,public _ser:StockSerService,public _rout:Router) { }

  ngOnInit() {
    this.StockID=this._receive.snapshot.params['StockID'];
    this._ser.GetStockById(this.StockID).subscribe(
      (data:Stock[])=>{
        this.StockNAME = data[0].StockNAME;
        this.StockQTY = data[0].StockQTY;
        this.StockALERT = data[0].StockALERT;
        this.StockALERT1 = this.StockALERT*8;
      }
    )
  }
  onstocktype(item){
    this.itemradio = item;
    if(this.itemradio=="Kg")
    {
    if(this.StockQTY>=10000)
        {
          this.StockQTY=this.StockQTY/1000;
        }
      }
    else
    {
      if(this.StockQTY<=1000)
      {
        this.StockQTY=this.StockQTY*1000;
      }
    }
  }
  onSaveStock(f){
    this.StockALERT2 = this.StockALERT1/8;
      if(this.itemradio=="Kg"){
        this.StockQTY1 = this.StockQTY*1000;


      }
      else{
        this.StockQTY1 = this.StockQTY;
      }

      this._ser.updateStock(new Stock(this.StockNAME,this.StockQTY1,this.StockALERT2,this.StockID)).subscribe(
        (data:Stock[])=>{
          alert("updated");

        this._rout.navigate(['menu1/cashierstock']);
        }

      )

  }
  onClickCancel(){
    this._rout.navigate(['menu1/cashierstock']);
  }

}
