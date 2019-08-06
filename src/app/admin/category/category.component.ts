import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog,MAT_DIALOG_DATA } from "@angular/material";
import { CategorySerService } from '../../services/category-ser.service';
import { Category } from '../category/category';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { PopupComponent } from 'src/app/category/popup/popup.component';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  catarr:Category[]=[];
  catname:string="";
  CategoryID:number;
  CategoryNAME:string="";
  flag:boolean = false;
  delArr:Category[]=[];
  i:number;
  selection = new SelectionModel<Category>(true, []);
  destroy=new Subject<any>();
  currentDialog:MatDialogRef<PopupComponent>=null;
  constructor(public activate_rout:ActivatedRoute,private _send:Router,private _ser:CategorySerService,private dialog: MatDialog) { }
  displayedColumns: string[] = ["select","name","Action"];
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._ser.getAllCategory().subscribe(
      (data:Category[])=>{
        this.catarr=data;
        this.dataSource.data=this.catarr;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEdit(item:Category){
    this._send.navigate(["menu/catedit", item.CategoryID]);
  }
  onsingledelete(item:Category){
  if(confirm("Are you sure you want to delete?")){
    this._ser.deleteOneCategory(item.CategoryID).subscribe(
      (data:any)=>{
        if(this.catarr.find(x=>x.CategoryID==item.CategoryID)){
          this.catarr.splice(this.catarr.indexOf(item),1);
        }
        this.dataSource.data=this.catarr;
      }
    );
    }
  }
  onAddOnOff()
  {
    if(this.flag)
    {
      this.flag=false;
      this.catname="";
    }
    else
    {
      this.flag=true;
    }
    this.catname="";
  }
  onAdd(){
  if (this.catarr.find(x => x.CategoryNAME == this.catname)) {
    alert("This Category Is Already Exits");
  }

   else
  {
    if(this.catname.length>0){
    this._ser
      .addCategory(new Category(this.CategoryID, this.catname))
      .subscribe((data:any) => {
        this.catarr.push(new Category(data.insertId, this.catname));
        alert("Category Added Successfully");
        this.dataSource.data = this.catarr;
        this.catname='';
      });
    }
    else{
      alert("Should Not Empty");
    }
  }
}
checkChange(item: Category) {
  if (this.delArr.find(x => x == item)) {
    this.delArr.splice(this.delArr.indexOf(item), 1);
  } else {
    this.delArr.push(item);
  }
}
deleteAll(){
  if(confirm("Are you sure you want to delete?")){
  this._ser.deleteAllCategory(this.delArr).subscribe(

  (data:any)=>{
  for(this.i=0;this.i<this.delArr.length;this.i++)
  {
  if(this.catarr.find(x=>x==this.delArr[this.i]))
  {
  this.catarr.splice(this.catarr.indexOf(this.delArr[this.i]),1);
  }
  }
  this.ngOnInit();
  this.dataSource.data=this.catarr;
  }
)};
}

// onsingledelete(item:Category)
// {
//   this.activate_rout.params.pipe(takeUntil(this.destroy)).subscribe(params=>{
//     if(this.currentDialog)
//      {
//        this.currentDialog.close();
//      }
//     this.currentDialog=this.dialog.open(PopupComponent,{
//       data:{fk_email_id:this.fk_email_id}
//     })
//     this.currentDialog.afterClosed().subscribe(result=>{
//       console.log("this close");
//      this._route.navigate(['/feedbackreply',this.fk_email_id]);

//     })
//     })

  //   this._ser.deleteOneCategory(item.CategoryID).subscribe(
  //     (data:any)=>{
  //       if(this.catarr.find(x=>x.CategoryID==item.CategoryID)){
  //         this.catarr.splice(this.catarr.indexOf(item),1);
  //       }
  //       this.dataSource.data=this.catarr;
  //     }
  //   );
  //    }
  // ngOnDestroy(){
  //   this.destroy.next();
  // }
}

