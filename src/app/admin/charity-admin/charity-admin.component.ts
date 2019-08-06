import { Component, OnInit ,ViewChild} from '@angular/core';
import { Charity } from './charity';
import { Router } from '@angular/router';
import {  MatTableDataSource,MatSort,MatPaginator  } from '@angular/material';
import { CharityserviceService } from 'src/app/services/charityservice.service';


@Component({
  selector: 'app-charity-admin',
  templateUrl: './charity-admin.component.html',
  styleUrls: ['./charity-admin.component.css']
})
export class CharityAdminComponent implements OnInit {
  delcharity:Charity[]=[];
  dataSourceofItem=new MatTableDataSource();
  displayedColumnsofItem:string[]=['checkbox','CharityID','CharityNAME','CharityADDRESS','CharityMOBILE','Action'];
  charityarr:Charity[]=[];
  charityID:string;
  charityNAME:string;
  charityADDRESS:string;
  charityMOBILE:string;
  charityEmailID:string;
  charityName:string;
  charityAddress:string;
  charityMobile:string;
  addflag:boolean=false;
  constructor(private _send:Router,private _Ser:CharityserviceService) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSourceofItem.paginator=this.paginator;
    this.dataSourceofItem.sort = this.sort;
    this._Ser.getAllCharity().subscribe(
      (data:any)=>{
        this.charityarr = data;
        this.dataSourceofItem.data=this.charityarr;
      }
    )
  }
  onAdd(){
  }
  onDeleteOneItem(item){
    if(confirm("Are you sure you want to delete?")){
    this._Ser.deleteOneCharity(item.CharityID).subscribe(
      (data:any)=>{
        if(this.charityarr.find(x=>x.CharityID==item.CharityID)){
          this.charityarr.splice(this.charityarr.indexOf(item),1);
        }
        this.dataSourceofItem.data=this.charityarr;
      }

    )
    }
  }
  onEditItem(itemID:string){
   // console.log(itemID);
    this._send.navigate(['menu/updatecharity',itemID]);
  }
  onCheckchange(item:Charity){
    if(this.delcharity.find(x=>x.CharityID==item.CharityID)){
      this.delcharity.splice(this.delcharity.indexOf(item),1);
    }
    else{
      this.delcharity.push(item);
    }
     console.log(this.delcharity);
  }
  onDetails(itemID:number){

  }
  oncharitymail()
  {
    this._send.navigate(['menu/sendmailcharity']);
  }

  onDeleteAllCharity(){
    this._Ser.deleteAllCharity(this.delcharity).subscribe(
      (data:any)=>{
        for(let i=0;i<this.delcharity.length;i++){
          if(this.charityarr.find(x=>x.CharityID==this.delcharity[i].CharityID)){
            this.charityarr.splice(this.charityarr.indexOf(this.delcharity[i]),1);
          }
          this.dataSourceofItem.data=this.charityarr;
        }
      }
    );
  }
  onSaveCharity(){
    this._Ser.addcharity(new Charity(this.charityEmailID,this.charityName,this.charityAddress,this.charityMobile)).subscribe(
      (data:Charity[])=>{
        this.addflag=false;
        this.ngOnInit();
     }
    )
  }
  onClickCancel(f){

      this.addflag=false;
      this.charityAddress="";
      this.charityEmailID="";
      this.charityMobile="";
      this.charityName="";
  }
  onAddnewItem(){
    if(this.addflag){
      this.addflag=false;
    }
    else{
      this.addflag=true;
    }
    this.charityAddress="";
    this.charityEmailID="";
    this.charityMobile="";
    this.charityName="";
  }
  applyFilter(filterValue: string) {
    this.dataSourceofItem.filter = filterValue.trim().toLowerCase();
  }

}
