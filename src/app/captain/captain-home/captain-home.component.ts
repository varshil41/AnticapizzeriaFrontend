import { Component, OnInit } from '@angular/core';
import { ItemSerService } from 'src/app/services/item-ser.service';
import { CategorySerService } from 'src/app/services/category-ser.service';
import { Category } from 'src/app/admin/category/category';

@Component({
  selector: 'app-captain-home',
  templateUrl: './captain-home.component.html',
  styleUrls: ['./captain-home.component.css']
})
export class CaptainHomeComponent implements OnInit {

  constructor(private _Ser:CategorySerService) { }
  category:Category[]=[];
  ngOnInit() {
    this._Ser.getAllCategory().subscribe(
      (data:any)=>{
        this.category = data;
      }
    )
  }
  abc(){
    alert("hello");
  }
}
