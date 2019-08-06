import { Component, OnInit } from '@angular/core';
import { ItemSerService } from 'src/app/services/item-ser.service';
import { StockSerService } from 'src/app/services/stock-ser.service';
import { CategorySerService } from 'src/app/services/category-ser.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { IngredientsDetail } from '../../stock/ingredientsdetail';
import { Category } from '../../category/category';
import { Stock } from '../../stock/stock';
import { Item } from '../item';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {
  itemID:number;
  itemNAME:string="";
  itemPRICE:number;
  itemTYPE:string="";
  itemIMG:string="";
  fkcategoryID:number;
  itemINGREDIENTSNAME:string="";
  itemINGREDIENTSUnit:number=0;
  ingredientsIDarr:string[]=[];
  ingredientsUNITarr:string[]=[];
  ingredientunitarr:number[]=[];
  ingredientnamearr:Stock[]=[];
  ingredientsobj:Stock;
  itemPREPARETIME:string="";
  itemPREPARETIMEarr:string[]=[];
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
flag:boolean=false;
  constructor(private _receive:ActivatedRoute,private _send:Router,private _cat:CategorySerService,private _stock:StockSerService,private _item:ItemSerService) { }

  ngOnInit() {
    this.itemID=this._receive.snapshot.params['itemID'];

    this._item.getItemById(this.itemID).subscribe(
      (data:Item[])=>{

          this.itemNAME=data[0].itemNAME;
          this.itemPREPARETIME=data[0].itemPREPARETIME;
          this.itemPRICE=data[0].itemPRICE;
          this.itemTYPE=data[0].itemTYPE;
          this.itemINGREDIENTS=data[0].itemINGREDIENTS;
          this.itemIMG=data[0].itemIMG;
          this.CategoryID=data[0].fkCategoryID;
          this.itemPREPARETIME=data[0].itemPREPARETIME;
          let ingredientarr:string[]=[];

          ingredientarr=this.itemINGREDIENTS.split("|");

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
              console.log(data);
              for(let i=0;i<data.length;i++){
                this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(data[i].StockID,data[i].StockNAME,parseInt(this.ingredientsUNITarr[i])));
              }
              this.dataSourceOfIngredient.data=this.itemINGREDIENTSDETAIL;

            }
          );
      }
    );
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
      this.itemPREPARETIMEarr.push(j+" min");
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
    let a;
    this.ingredientsobj=this.ingredientnamearr.find(x=>x.StockNAME==this.itemINGREDIENTSNAME);
    if(this.itemINGREDIENTSDETAIL.find(x=>x.itemINGREDIENTSID==this.ingredientsobj.StockID)){
      a=this.itemINGREDIENTSDETAIL.find(x=>x.itemINGREDIENTSID==this.ingredientsobj.StockID);
      this.itemINGREDIENTSDETAIL.splice(this.itemINGREDIENTSDETAIL.indexOf(a),1);
    }
    this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(this.ingredientsobj.StockID,this.itemINGREDIENTSNAME,this.itemINGREDIENTSUnit));
    this.dataSourceOfIngredient.data=this.itemINGREDIENTSDETAIL;
    this.itemINGREDIENTSNAME="";
    this.itemINGREDIENTSUnit=0;

  }
  onSaveItem(){
    this.itemINGREDIENTS="";
    for(let i=0;i<this.itemINGREDIENTSDETAIL.length;i++){

      this.itemINGREDIENTS+=this.itemINGREDIENTSDETAIL[i].itemINGREDIENTSID+"|"+this.itemINGREDIENTSDETAIL[i].itemINGREDIENTSUNIT+"|";
    }
console.log(this.itemINGREDIENTS);
  if(this.flag==true){
    console.log("hello");
    const fd=new FormData();
    fd.append('itemID',this.itemID+"");
    fd.append('itemNAME',this.itemNAME);
    fd.append('itemPRICE',this.itemPRICE+"");
    fd.append('itemINGREDIENTS',this.itemINGREDIENTS);
    fd.append('itemIMG',this.selectedFile,this.selectedFile.name);
    fd.append('fkCategoryID',this.CategoryID+"");
    fd.append('itemPREPARETIME',this.itemPREPARETIME);
    fd.append('itemTYPE',this.itemTYPE);
    this._item.updateItemWithImage(fd).subscribe(
      (data:any)=>{

        this._send.navigate(["/menu/item"]);
      }
    );
  }
  else{
this._item.updateItem(new Item(this.itemID,this.itemNAME,this.itemPRICE,this.itemINGREDIENTS,this.itemIMG,this.CategoryID,this.itemPREPARETIME,this.itemTYPE)).subscribe(
  (data:any)=>{
    console.log("success");
    this._send.navigate(["/menu/item"]);
  }
);
  }

  }
  onAddPicture(value){
    this.selectedFile=<File>value.target.files[0];
    if(this.selectedFile){
      this.flag=true;
    }
  }
  onClickCancel(){
    this._send.navigate(["menu/item"]);
  }

}

