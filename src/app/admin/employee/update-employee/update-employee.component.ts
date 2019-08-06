import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSerService } from '../../../services/employee-ser.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  EmpID:string="";
  cityarr:string[]=[
    'Ahmedabad','Surat','Baroda','Mumbai'
  ];
  genderarr:string[]=[
    'MALE','FEMALE'
  ];
  EmpNAME:string="";
  EmpGENDER:string="MALE";
  EmpMOBILE:string="";
  EmpADDRESS:string="";
  EmpPASSWORD:string="";
  EmpCITY:string="";
  EmpCATEGORY:string="";
  categoryarr:string[]=[
    'ADMIN','CAPTAIN','KITCHEN CHEF','CASHIER'
  ];
  EmpIMG:string="";
  updateEmpIMG:string="";
employeeID:string="";
selectedProfilePhoto:File=null;
imageFlag:boolean=false;
  constructor(private _emp:EmployeeSerService,private _receive:ActivatedRoute,private _send:Router) { }

  ngOnInit() {
    this.EmpID=this._receive.snapshot.params['EmpID'];
    console.log(this.EmpID);
    this._emp.getEmployeeByID(this.EmpID).subscribe(
      (data:Employee[])=>{
        console.log(data);
        this.EmpID=data[0].EmpID;
        this.EmpNAME=data[0].EmpNAME;
        this.EmpIMG=data[0].EmpIMG;
        this.EmpGENDER=data[0].EmpGENDER;
        this.EmpCITY=data[0].EmpCITY;
        this.EmpPASSWORD=data[0].EmpPASSWORD;
        this.EmpMOBILE=data[0].EmpMOBILE;
        this.EmpADDRESS=data[0].EmpADDRESS;
        this.EmpCATEGORY=data[0].EmpCATEGORY;
      }
    );
  }
  onSave(){

    if(this.imageFlag==true){
      const fd=new FormData();
    fd.append('EmpID',this.EmpID);
    fd.append('EmpPASSWORD',this.EmpPASSWORD);
    fd.append('EmpNAME',this.EmpNAME);
    fd.append('EmpIMG',this.selectedProfilePhoto,this.selectedProfilePhoto.name);
    fd.append('EmpGENDER',this.EmpGENDER);
    fd.append('EmpCITY',this.EmpCITY);
    fd.append('EmpMOBILE',this.EmpMOBILE);
    fd.append('EmpADDRESS',this.EmpADDRESS);
    fd.append('EmpCATEGORY',this.EmpCATEGORY);
      this._emp.updateWithImage(fd).subscribe(
        (data:any)=>{
          this._send.navigate(['menu/employee']);
        }
      );
    }
    else{
      this._emp.updateEmployee(new Employee(this.EmpID,this.EmpPASSWORD,this.EmpNAME,this.EmpIMG,this.EmpGENDER,this.EmpMOBILE,this.EmpCITY,this.EmpADDRESS,this.EmpCATEGORY)).subscribe(
        (data:any)=>{
          this._send.navigate(['menu/employee']);
        }
      );
    }
  }

  onSelectPicture(value){

    this.selectedProfilePhoto=<File>value.target.files[0];
    if(this.selectedProfilePhoto){
      this.imageFlag=true;
    }

  }
  OnClickCancle(){
    this._send.navigate(['menu/employee']);
  }

}
