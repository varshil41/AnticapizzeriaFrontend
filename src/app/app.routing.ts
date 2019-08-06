import { RouterModule,Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CaptainComponent } from './captain/captain.component';
import { MenuComponent } from './admin/menu/menu.component';
import { CashierComponent } from './cashier/cashier.component';
import { KitchenChefComponent } from './kitchen-chef/kitchen-chef.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { ItemComponent } from './admin/item/item.component';
import { AdditemComponent } from './admin/item/additem/additem.component';
import { UpdateitemComponent } from './admin/item/updateitem/updateitem.component';
import { DetailitemComponent } from './admin/item/detailitem/detailitem.component';
import { StockComponent } from './admin/stock/stock.component';
import { UpdatestockComponent } from './admin/stock/updatestock/updatestock.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { InvoiceDetailComponent } from './admin/invoice-detail/invoice-detail.component';
import { ViewprofileComponent } from './admin/viewprofile/viewprofile.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { Menu1Component } from './menu1/menu1.component';
import { CashierinvoiceComponent } from './cashier/cashierinvoice/cashierinvoice.component';
import { CashierstockComponent } from './cashier/cashierstock/cashierstock.component';
import { CharityComponent } from './cashier/charity/charity.component';
import { CharityAdminComponent } from './admin/charity-admin/charity-admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { StockupdateComponent } from './cashier/stockupdate/stockupdate.component';
import { PastorderComponent } from './captain/pastorder/pastorder.component';
import { UpdatecharityComponent } from './admin/charity-admin/updatecharity/updatecharity.component';
import { CharitymailadminComponent } from './admin/charity-admin/charitymailadmin/charitymailadmin.component';
import { CashierplacestockComponent } from './cashier/cashierstock/cashierplacestock/cashierplacestock.component';
import { PlacestockComponent } from './admin/stock/placestock/placestock.component';
import { PrintbillComponent } from './cashier/cashierinvoice/printbill/printbill.component';


const arr:Routes=[
{path:'',component:WelcomepageComponent},
{path:'loginpage',component:LoginpageComponent},
{path:'forgetpassword',component:ForgetpasswordComponent},
{path:'menu',component:MenuComponent,children:[
  {path:'',component:AdminHomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'catedit/:id',component:EditCategoryComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'addnewemployee',component:AddEmployeeComponent},
  {path:'updateemployee/:EmpID',component:UpdateEmployeeComponent},
  {path:'item',component:ItemComponent},
  {path:'addnewitem',component:AdditemComponent},
  {path:'updateitem/:itemID',component:UpdateitemComponent},
  {path:'itemdetails/:itemID',component:DetailitemComponent},
  {path:'stock',component:StockComponent},
  {path:'placestock',component:PlacestockComponent},
  {path:'updatestock/:StockID',component:UpdatestockComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'invoicedetail/:invoiceID',component:InvoiceDetailComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'changepass',component:ChangePasswordComponent},
  {path:'charity',component:CharityAdminComponent},
  {path:'order',component:OrdersComponent},
  {path:'updatecharity/:charityID',component:UpdatecharityComponent},
  {path:'sendmailcharity',component:CharitymailadminComponent},

]},
  {path:'captain',component:CaptainComponent},
  {path:'pastorder',component:PastorderComponent},
  {path:'menu1',component:Menu1Component,children:[
    {path:'',component:CashierComponent},
    {path:'cashierinvoice',component:CashierinvoiceComponent},
    {path:'printbill',component:PrintbillComponent},
    {path:'cashierstock',component:CashierstockComponent},
    {path:'cashierplacestock',component:CashierplacestockComponent},
    {path:'charity',component:CharityComponent},
    {path:'stockupdate/:StockID',component:StockupdateComponent}

  ]},
  {path:'kitchen_chef',component:KitchenChefComponent}

];
export const routing=RouterModule.forRoot(arr);
