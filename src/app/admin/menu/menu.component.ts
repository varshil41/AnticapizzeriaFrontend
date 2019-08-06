import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmployeeSerService } from 'src/app/services/employee-ser.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  flag:boolean=true;
  EmpID:string;
  name:string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private _rout:Router,private _Ser:EmployeeSerService) {}
  onLogout(){
    this._rout.navigate(['loginpage']);
  }
   onviewprofile(){
      this._rout.navigate(['menu/viewprofile']);
   }
   changepass(){
    this._rout.navigate(['/menu/changepass']);
   }
   ngOnInit(){
     this.name=localStorage.getItem('Name');
   }
  }
