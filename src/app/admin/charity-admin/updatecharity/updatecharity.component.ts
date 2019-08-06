import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharityserviceService } from 'src/app/services/charityservice.service';
import { Charity } from '../charity';

@Component({
  selector: 'app-updatecharity',
  templateUrl: './updatecharity.component.html',
  styleUrls: ['./updatecharity.component.css']
})
export class UpdatecharityComponent implements OnInit {
  CharityID:string;
  CharityNAME:string;
  CharityADDRESS:string;
  CharityMOBILE:string;
  constructor(public _receive:ActivatedRoute,public _ser:CharityserviceService,private _route:Router) { }

  ngOnInit() {
  this.CharityID=this._receive.snapshot.params['charityID'];
  console.log(this.CharityID);
  this._ser.getCharityById(this.CharityID).subscribe(
    (data:any)=>{
      this.CharityNAME=data[0].CharityNAME;
      this.CharityADDRESS=data[0].CharityADDRESS;
      this.CharityMOBILE=data[0].CharityMOBILE;
        }
  )
  }
  onSaveCharity(){
      this._ser.updatecharity(new Charity(this.CharityID,this.CharityNAME,this.CharityADDRESS,this.CharityMOBILE)).subscribe(
      (data:any)=>{
      this._route.navigate(['menu/charity']);
      }
    );
    }
  onClickCancel(){
      this._route.navigate(['menu/charity']);
  }
}
