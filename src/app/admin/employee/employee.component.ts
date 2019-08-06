import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { EmployeeSerService } from '../../services/employee-ser.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeeComponent implements OnInit {
  Employeearr:Employee[]=[];
  addnewemployeeflag:boolean=false;
dataSourceofEmployee=new MatTableDataSource();
displayedColumnsofEmployee:string[]=['EmpNAME','EmpCATEGORY','EmpMOBILE','Action'];
delemployee:Employee[]=[];
expandedElement;
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _emp:EmployeeSerService,private _send:Router) { }

  ngOnInit() {
    this.dataSourceofEmployee.paginator=this.paginator;
    this.dataSourceofEmployee.sort = this.sort;
    this._emp.getAllEmployee().subscribe(
      (data:Employee[])=>{
        console.log(data);
        this.Employeearr=data;
        this.dataSourceofEmployee.data=this.Employeearr;
      }
    );
  }
  onDeleteAllEmployee(){
    this._emp.deleteAllEmployee(this.delemployee).subscribe(
      (data:any)=>{
        for(let i=0;i<this.delemployee.length;i++){
          if(this.Employeearr.find(x=>x.EmpID==this.delemployee[i].EmpID)){
            this.Employeearr.splice(this.Employeearr.indexOf(this.delemployee[i]),1);
          }
          this.dataSourceofEmployee.data=this.Employeearr;
        }
      }
    );
  }
  onDeleteOneEmployee(item){
    this._emp.deleteOneEmployee(item.EmpID).subscribe(
      (data:any)=>{
        if(this.Employeearr.find(x=>x.EmpID==item.EmpID)){
          this.Employeearr.splice(this.Employeearr.indexOf(item),1);
        }
        this.dataSourceofEmployee.data=this.Employeearr;
      }
    );
  }
  onAddnewEmployee(){
    this._send.navigate(['menu/addnewemployee']);
  }
  onEmployeeEdit(EmpID:string){

    this._send.navigate(['menu/updateemployee',EmpID]);
  }
  onCheckchange(element:Employee){
    if(this.delemployee.find(x=>x.EmpID==element.EmpID)){
      this.delemployee.splice(this.delemployee.indexOf(element),1);
    }
    else{
      this.delemployee.push(element);
    }
  }
  applyFilter(filterValue: string) {
    this.dataSourceofEmployee.filter = filterValue.trim().toLowerCase();
  }
}
