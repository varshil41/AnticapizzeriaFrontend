import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from '../../services/employee-ser.service';
import { Sendemail } from '../../forgetpassword/sendemail';
import { Charity } from 'src/app/admin/charity-admin/charity';
import { CharityserviceService } from 'src/app/services/charityservice.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {
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
