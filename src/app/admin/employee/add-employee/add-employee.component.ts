import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSerService } from '../../../services/employee-ser.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  EmpID:string="";
  cityarr:string[]=[
    'Ahemdabad','Surat','Baroda','Mumbai'
  ];
  genderarr:string[]=[
    'MALE','FEMALE'
  ];
  EmpNAME:string="";
  EmpIMG:string="";
  EmpGENDER:string="MALE";
  EmpMOBILE:string="";
  EmpADDRESS:string="";
  EmpPASSWORD:string="";
  EmpCITY:string="";
  EmpCATEGORY:string="";
  selectedFile:File=null;
  categoryarr:string[]=[
    'ADMIN','CAPTAIN','KITCHEN CHEF','CASHIER'
  ];
  constructor(private _emp:EmployeeSerService,private _receive:ActivatedRoute,private _send:Router) { }

  ngOnInit() {
    this._receive.snapshot.params[''];
  }
  clearall(){
    this.EmpID="";
    this.EmpCATEGORY="";
    this.EmpCITY="";
    this.EmpGENDER="MALE";
    this.EmpMOBILE="";
    this.EmpPASSWORD="";
    this.EmpNAME="";
    this.EmpADDRESS="";
  }
  onSaveEmployee(){
    const fd=new FormData();
    fd.append('EmpID',this.EmpID);
    fd.append('EmpPASSWORD',this.EmpPASSWORD);
    fd.append('EmpNAME',this.EmpNAME);
    fd.append('EmpIMG',this.selectedFile,this.selectedFile.name);
    fd.append('EmpGENDER',this.EmpGENDER);
    fd.append('EmpCITY',this.EmpCITY);
    fd.append('EmpMOBILE',this.EmpMOBILE);
    fd.append('EmpADDRESS',this.EmpADDRESS);
    fd.append('EmpCATEGORY',this.EmpCATEGORY);
    this._emp.getEmployeeByID(this.EmpID).subscribe(
      (data:Employee[])=>{
        if(data.length==1){
          alert("Employee Id is already exist.");
          this.EmpID="";
        }
        else{
          this._emp.addEmployee(fd).subscribe(
            (data:any)=>{
              this._send.navigate(['menu/employee']);
            }
          );
        }
      }
    );

  }
  onClickCancel(){
    this._send.navigate(['menu/employee']);
  }
  onAddPicture(value){
    this.selectedFile=<File>value.target.files[0];
  }
}
