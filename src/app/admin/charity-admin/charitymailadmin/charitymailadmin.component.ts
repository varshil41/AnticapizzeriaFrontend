import { Component, OnInit } from '@angular/core';
import { Charity } from '../charity';
import { CharityserviceService } from 'src/app/services/charityservice.service';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';
import { Sendemail } from 'src/app/forgetpassword/sendemail';


@Component({
  selector: 'app-charitymailadmin',
  templateUrl: './charitymailadmin.component.html',
  styleUrls: ['./charitymailadmin.component.css']
})
export class CharitymailadminComponent implements OnInit {
  charity:Charity[]=[];
  constructor(private _ser:EmployeeSerService,private _charityser:CharityserviceService) { }

  ngOnInit() {
    this._charityser.getAllCharity().subscribe(
      (data:any)=>{
        this.charity=data;
      }
    )
  }
  onsend(item){
    console.log(item);
    this._ser.sendMail(new Sendemail(item,"ANTICA PIZZERIA","Collect the leftover Food")).subscribe(
      (data:any)=>{
      alert("Mail has been Sent");
      }
    )
  }

}
