import { Component, OnInit, Inject } from '@angular/core';
import { CategoryComponent } from 'src/app/admin/category/category.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<CategoryComponent>) {
    console.log("Insadsf")
   }

  ngOnInit() {


  }
  onYes(){
    this.dialogref.close();
  }
  onNo()
  {
    this.dialogref.close();
  }

}
