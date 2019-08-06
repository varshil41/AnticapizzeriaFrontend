import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';
import { Employee } from '../employee/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  EmpID:string;
  EmpPassword:string;
  EmpRepassword:string;
  flag:boolean=true;
  flag1:boolean=true;
  constructor(private _Ser:EmployeeSerService,private _route:Router) { }

  ngOnInit() {
    this.EmpID = localStorage.getItem('empid');

  }
  onSave(){
    this._Ser.changepass(new Employee(this.EmpID,this.EmpPassword)).subscribe(
      (data:any)=>{
        if(this.EmpPassword==this.EmpRepassword)
        {
          alert('Password is Changed , You have to Re Login');
          this._route.navigate(['loginpage']);

        }
        else{
          alert('Password must be same')
        }
      }
    )
  }
  onBack(){
    this._route.navigate(['menu']);
  }

}
