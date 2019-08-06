import { Component, OnInit } from '@angular/core';
import { IngredientsDetail } from '../../stock/ingredientsdetail';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemSerService } from 'src/app/services/item-ser.service';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { Stock } from '../../stock/stock';

@Component({
  selector: 'app-detailitem',
  templateUrl: './detailitem.component.html',
  styleUrls: ['./detailitem.component.css']
})
export class DetailitemComponent implements OnInit {
  itemIMG:string;
  itemNAME:string;
  itemID:number;
  itemPRICE:number;
  itemCATEGORY:string;
  itemTYPE:string;
  itemPREPARETIME:String;
  itemINGREDIENTS:string;
  ingredientsIDarr:string[]=[];
  ingredientsUNITarr:string[]=[];
  itemINGREDIENTSDETAIL:IngredientsDetail[]=[];
  ingredientsIDarr1:string[]=[];
  constructor(private _receive:ActivatedRoute,private _send:Router,private _item:ItemSerService,private _stock:StockSerService) { }

  ngOnInit() {
    this.itemID=this._receive.snapshot.params['itemID'];
    console.log(this.itemID);
    this._item.getItemById(this.itemID).subscribe(
      (data:any[])=>{
        console.log(data);
        this.itemIMG = data[0].itemIMG;
        this.itemNAME = data[0].itemNAME;
        this.itemPRICE=data[0].itemPRICE;
        this.itemCATEGORY=data[0].categoryNAME;
        this.itemTYPE=data[0].itemTYPE;
        this.itemPREPARETIME=data[0].itemPREPARETIME;
        this.itemINGREDIENTS=data[0].itemINGREDIENTS;
        let ingredientarr:string[]=[];
        ingredientarr=this.itemINGREDIENTS.split("|");
        console.log(ingredientarr);

        for(let i=0;i<ingredientarr.length;i++){
          if(i%2==0){
            this.ingredientsIDarr.push(ingredientarr[i]);

          }
          else{
            this.ingredientsUNITarr.push(ingredientarr[i]);
          }
        }

        this._stock.getStockByIn(this.ingredientsIDarr).subscribe(
          (data:Stock[])=>{
            for(let i=0;i<data.length;i++){
              this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(data[i].StockID,data[i].StockNAME,parseInt(this.ingredientsUNITarr[i])));
            }

          }
        );


      }
    )
  }

  }
