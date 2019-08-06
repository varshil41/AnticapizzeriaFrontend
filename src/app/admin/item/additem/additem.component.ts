import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../../stock/stock';
import { Category } from '../../category/category';
import { IngredientsDetail } from '../../stock/ingredientsdetail';
import { MatTableDataSource } from '@angular/material';
import { ItemSerService } from 'src/app/services/item-ser.service';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { CategorySerService } from 'src/app/services/category-ser.service';
import { Item } from '../item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  itemNAME:string="";
  itemPRICE:number;
  itemTYPE:string="REGULAR";
  itemINGREDIENTSNAME:string="";
  itemINGREDIENTSUnit:number=0;
  ingredientunitarr:number[]=[];
  ingredientnamearr:Stock[]=[];
  ingredientsobj:Stock;
  itemPREPARETIME:string;
  itemPREPARETIMEarr:number[]=[];
  CategoryID:number=0;
  categoryarr:Category[]=[];
  itemtypearr:string[]=[
    'REGULAR','JAIN'
  ];
  unit:number=5;
itemINGREDIENTS:string="";
itemINGREDIENTSDETAIL:IngredientsDetail[]=[];
dataSourceOfIngredient=new MatTableDataSource();
displayedColumnsOfIngredient:string[]=[
  'IngredientName',"IngredientUnit"
];
selectedFile:File=null;
  constructor(private _send:Router,private _cat:CategorySerService,private _stock:StockSerService,private _item:ItemSerService) { }

  ngOnInit() {
    this._cat.getAllCategory().subscribe(
      (data:Category[])=>{

        this.categoryarr=data;
        console.log(this.categoryarr);
      }
    );

    this._stock.getAllStock().subscribe(
      (data:Stock[])=>{
        this.ingredientnamearr=data;
      }
    );
    for(let j=20;j<100;j=j+5){
      this.itemPREPARETIMEarr.push(j);
    }
      for(let i=1;i<30;i++){
        this.ingredientunitarr.push(this.unit);
        if(this.unit<=5){
          this.unit+=5;
        }
        else if(this.unit>5 && this.unit<100){
          this.unit+=10;
        }
        else if(this.unit>=100 && this.unit<1000){
          this.unit+=50;
        }

      }
    }
      onAddIngredients(){
        this.ingredientsobj=this.ingredientnamearr.find(x=>x.StockNAME==this.itemINGREDIENTSNAME);

        this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(this.ingredientsobj.StockID,this.itemINGREDIENTSNAME,this.itemINGREDIENTSUnit));
        this.dataSourceOfIngredient.data=this.itemINGREDIENTSDETAIL;

        this.itemINGREDIENTS+=this.ingredientsobj.StockID+"|"+this.itemINGREDIENTSUnit+"|";
        this.ingredientnamearr.splice(this.ingredientnamearr.indexOf(this.ingredientsobj),1);
        this.itemINGREDIENTSNAME="";
        this.itemINGREDIENTSUnit=0;

      }
      onSaveItem(){
        const fd=new FormData();
        fd.append('itemNAME',this.itemNAME);
        fd.append('itemPRICE',this.itemPRICE+"");
        fd.append('itemINGREDIENTS',this.itemINGREDIENTS);
        fd.append('itemIMG',this.selectedFile,this.selectedFile.name);
        fd.append('fkCategoryID',this.CategoryID+"");
        fd.append('itemPREPARETIME',this.itemPREPARETIME);
        fd.append('itemTYPE',this.itemTYPE);
        this._item.getItemByName(this.itemNAME).subscribe(
          (data:Item[])=>{
            if(data.length===1){
              alert("Item Already present.");
            }
            else{
              this._item.AddNewItem(fd).subscribe(
                (data:any)=>{
                  this._send.navigate(['menu/item']);
                }
              );
            }
          }
        );

      }
      onAddPicture(value){
        this.selectedFile=<File>value.target.files[0];
      }
      onClickCancel(){
        this._send.navigate(['menu/item']);
      }
}
