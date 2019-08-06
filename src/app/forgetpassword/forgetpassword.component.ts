import { Component, OnInit } from '@angular/core';
import { Sendemail } from '../forgetpassword/sendemail';
import { Employee } from '../admin/employee/employee';
import { EmployeeSerService } from '../services/employee-ser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  EmpID:string="";
  EmpPASSWORD:string;
  subject1:string = "ANTICA PIZZERIA FORGOT PASSWORD";
  constructor(public _ser:EmployeeSerService,public _send:Router) { }

  ngOnInit() {
  }
  onEmpForgotPassword(){
    this._ser.ForgotPassword(this.EmpID).subscribe(
      (data:Employee[])=>{
        if(data.length>0)
        {
          this.EmpPASSWORD = data[0].EmpPASSWORD;
          this._ser.sendMail(new Sendemail(this.EmpID,this.subject1,"your password is"+ this.EmpPASSWORD)).subscribe(
            (data:Sendemail)=>{
            }
          )
          alert('password will send on your account');
          this._send.navigate(["/loginpage"]);
        }
        else
        {
          alert('Email Id is not correct')
        }
      }
    )
  }

}
