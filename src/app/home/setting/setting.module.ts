import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { routing } from '../home/home.routing';
import { TopnavComponent } from '../topnav/topnav.component';
import { FooterComponent } from '../footer/footer.component';
import { SettingComponent } from '../setting/setting.component';
import { UsersComponent } from '..//users/users.component';
import { WarehousesComponent } from '../warehouses/warehouses.component';
import { SettingDemoComponent } from '../setting-demo/setting-demo.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import { EditWarehouseComponent } from '../edit-warehouse/edit-warehouse.component';
import { ProductComponent } from '../product/product.component';
import { ExpenseComponent } from '../expense/expense.component';
import { ExpenseTopNavComponent } from '../expense-top-nav/expense-top-nav.component';
import { SalesComponent } from '../sales/sales.component';
import { WaitersComponent } from '../waiters/waiters.component';
import { CustomersComponent } from '../customers/customers.component';
import { SuppliersComponent } from '../suppliers/suppliers.component';
import { StoresComponent } from '../stores/stores.component';
import { ProductTopComponent } from '../product-top/product-top.component';
import { POSComponent } from '../pos/pos.component';
import { ReportsComponent } from '../reports/reports.component';
import { CategoryEditProductComponent } from '../category-edit-product/category-edit-product.component';
import { CategoryEditExpenseComponent } from '../category-edit-expense/category-edit-expense.component';
import { ExpenseTopEditComponent } from '../expense-top-edit/expense-top-edit.component';
import { EditWaiterComponent } from '../edit-waiter/edit-waiter.component';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';
import { EditSuppliersComponent } from '../edit-suppliers/edit-suppliers.component';
import { ProductTopEditComponent } from '../product-top-edit/product-top-edit.component';
import {EditUserComponent} from '../edit-user/edit-user.component'
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { StoreTableAttachComponent } from '../store-table-attach/store-table-attach.component';
import { EditStoreComponent } from '../edit-store/edit-store.component';
import { EditStoreTableComponent } from '../edit-store-table/edit-store-table.component';
import { PosAddComponent } from '../pos-add-/pos-add-.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { MyDateRangePickerModule } from 'mydaterangepicker';

@NgModule({
  imports: [
    CommonModule,
    routing,
    CKEditorModule,
    Ng2Bs3ModalModule, ChartsModule, MyDateRangePickerModule,
    FormsModule,  Ng2SearchPipeModule,Ng2FilterPipeModule, NgxPaginationModule, ImageUploadModule,
  ],
  declarations: [
    SettingComponent,
    UsersComponent,
    WarehousesComponent,
    SettingDemoComponent,
    EditWarehouseComponent,
    ProductComponent,
    ExpenseComponent,
    ExpenseTopNavComponent,
    SalesComponent,
    WaitersComponent,
    CustomersComponent,
    SuppliersComponent,
    StoresComponent,
    ProductTopComponent,
    POSComponent, EditUserComponent, ReportsComponent,
    CategoryEditProductComponent,  CategoryEditExpenseComponent, ExpenseTopEditComponent,
     EditWaiterComponent, EditCustomersComponent, EditSuppliersComponent,
      ProductTopEditComponent, StoreTableAttachComponent, EditStoreComponent, EditStoreTableComponent, PosAddComponent

   ]
})
export class SettingModule { }
