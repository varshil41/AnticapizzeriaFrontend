import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule,MatRadioModule,MatSelectModule,MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS , MatAutocompleteModule} from "@angular/material";
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './admin/category/category.component';
import { routing } from './app.routing';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CaptainComponent } from './captain/captain.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { CashierComponent } from './cashier/cashier.component';
import { KitchenChefComponent } from './kitchen-chef/kitchen-chef.component';
import { ItemComponent } from './admin/item/item.component';
import { StockComponent } from './admin/stock/stock.component';
import { BillComponent } from './admin/bill/bill.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { AdditemComponent } from './admin/item/additem/additem.component';
import { DetailitemComponent } from './admin/item/detailitem/detailitem.component';
import { UpdateitemComponent } from './admin/item/updateitem/updateitem.component';
import { UpdatestockComponent } from './admin/stock/updatestock/updatestock.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { InvoiceDetailComponent } from './admin/invoice-detail/invoice-detail.component';
import { ViewprofileComponent } from './admin/viewprofile/viewprofile.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Menu1Component } from './menu1/menu1.component';
import { CashierinvoiceComponent } from './cashier/cashierinvoice/cashierinvoice.component';
import { CashierstockComponent } from './cashier/cashierstock/cashierstock.component';
import { CharityComponent } from './cashier/charity/charity.component';
import { CharityAdminComponent } from './admin/charity-admin/charity-admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PopupComponent } from './category/popup/popup.component';
import { StockupdateComponent } from './cashier/stockupdate/stockupdate.component';
import { PastorderComponent } from './captain/pastorder/pastorder.component';
import { UpdatecharityComponent } from './admin/charity-admin/updatecharity/updatecharity.component';
import { PendingorderComponent } from './captain/pendingorder/pendingorder.component';
import { CharitymailadminComponent } from './admin/charity-admin/charitymailadmin/charitymailadmin.component';
import { CashierplacestockComponent } from './cashier/cashierstock/cashierplacestock/cashierplacestock.component';
import { PlacestockComponent } from './admin/stock/placestock/placestock.component';
import { PrintbillComponent } from './cashier/cashierinvoice/printbill/printbill.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EditCategoryComponent,
    MenuComponent,
    AdminHomeComponent,
    CaptainComponent,
    WelcomepageComponent,
    LoginpageComponent,
    EmployeeComponent,
    CashierComponent,
    KitchenChefComponent,
    ItemComponent,
    StockComponent,
    BillComponent,
    ForgetpasswordComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AdditemComponent,
    DetailitemComponent,
    UpdateitemComponent,
    UpdatestockComponent,
    InvoiceComponent,
    PlacestockComponent,
    InvoiceDetailComponent,
    ViewprofileComponent,
    ChangePasswordComponent,
    Menu1Component,
    CashierinvoiceComponent,
    CashierstockComponent,
    CharityComponent,
    CharityAdminComponent,
    OrdersComponent,
    PopupComponent,
    StockupdateComponent,
    PastorderComponent,
    UpdatecharityComponent,
    PendingorderComponent,
    CharitymailadminComponent,
    CashierplacestockComponent,
    PrintbillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackDrop:false}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
