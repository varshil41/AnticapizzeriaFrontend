import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
   EmpID:string;
   EmpNAME:string;
   EmpGENDER:string;
   EmpIMG:string;
   EmpMOBILE:string;
   EmpCITY:string;
   EmpADDRESS:string;
   EmpCATEGORY:string;
  constructor(private _ser:EmployeeSerService) { }

  ngOnInit() {
    this.EmpID = localStorage.getItem('empid');
    this._ser.getEmployeeByID(this.EmpID).subscribe(
      (data:any)=>{
        this.EmpNAME = data[0].EmpNAME;
        this.EmpGENDER = data[0].EmpGENDER;
        this.EmpADDRESS = data[0].EmpADDRESS;
        this.EmpIMG = data[0].EmpIMG;
        this.EmpMOBILE = data[0].EmpMOBILE;
        this.EmpCITY = data[0].EmpCITY;
        this.EmpCATEGORY = data[0].EmpCATEGORY;
      }
    )
  }

}
