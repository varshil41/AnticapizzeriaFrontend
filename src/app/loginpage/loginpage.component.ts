import { Component, OnInit } from '@angular/core';
import { Employee } from '../admin/employee/employee';
import { Router } from '@angular/router';
import { EmployeeSerService } from '../services/employee-ser.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public _empser:EmployeeSerService,public _send:Router) { }
  EmpID:string="";
  EmpPASSWORD:string="";
  Emparr:Employee[]=[];
  flag:boolean=true;
  EmpCATEGORY:string;
  ngOnInit() {
  }
  onEmpLogin(){
    this._empser.GetEmployeeByIdPassword(new Employee(this.EmpID,this.EmpPASSWORD)).subscribe(
      (data:Employee[])=>{
        this.Emparr = data;
        if(this.Emparr.length==1){
          this.EmpCATEGORY = data[0].EmpCATEGORY;
          localStorage.setItem('category',this.EmpCATEGORY);
          localStorage.setItem('email',data[0].EmpID);
          localStorage.setItem('Name',data[0].EmpNAME);
          //console.log(localStorage.getItem('category'));
          if(this.EmpCATEGORY=='CAPTAIN')
          {
              this._send.navigate(['captain']);
          }
          if(this.EmpCATEGORY=='ADMIN')
          {
              localStorage.setItem('empid',this.EmpID);
              this._send.navigate(['menu']);
          }
          if(this.EmpCATEGORY=="CASHIER")
          {
              this._send.navigate(['menu1']);
          }
          if(this.EmpCATEGORY=="KITCHEN CHEF")
          {
            this._send.navigate(['kitchen_chef']);
          }
        }

        else
        {
          alert("Invalid Email Id AND Password");
        }
      }
    )
  }
}
