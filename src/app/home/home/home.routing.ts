import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';
import { SettingComponent } from '../setting/setting.component';
import { UsersComponent } from '../users/users.component';
import { WarehousesComponent } from '../warehouses/warehouses.component';
import {SettingDemoComponent} from '../setting-demo/setting-demo.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
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
import {AuthGuard} from './auth.guard';
import { ReportsComponent } from '../reports/reports.component';
import { EditWarehouseComponent } from '../edit-warehouse/edit-warehouse.component';
import { CategoryEditExpenseComponent } from '../category-edit-expense/category-edit-expense.component';
import { ExpenseTopEditComponent } from '../expense-top-edit/expense-top-edit.component';
import { EditWaiterComponent } from '../edit-waiter/edit-waiter.component';
import { CategoryEditProductComponent } from '../category-edit-product/category-edit-product.component';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';
import { EditSuppliersComponent } from '../edit-suppliers/edit-suppliers.component';
import { POSNextComponent } from '../pos-next/pos-next.component';
import { PosAddComponent } from '../pos-add-/pos-add-.component';
import { EditStoreComponent } from '../edit-store/edit-store.component';
import { StoreTableAttachComponent } from '../store-table-attach/store-table-attach.component';
import { ProductTopEditComponent } from '../product-top-edit/product-top-edit.component';
import { EditStoreTableComponent } from '../edit-store-table/edit-store-table.component';

export const routes: Routes = [
    {
    path : 'home',
   component : HomeComponent, canActivate: [AuthGuard],
       children : [
          { path: 'edit_user/:id', component : EditUserComponent },
          {path: 'edit_store/:id',component: EditStoreComponent},
          { path: 'product', component : ProductComponent },
          { path: 'edit_warehouse/:id', component : EditWarehouseComponent },
          { path: 'expense', component : ExpenseComponent },
          { path: 'expenseTopNav', component : ExpenseTopNavComponent},
          {path:'PosAddComponent/:id', component: PosAddComponent},
          { path: 'sales', component : SalesComponent},
          { path: 'waiters', component :  WaitersComponent},
          { path: 'customers', component :  CustomersComponent},
          { path: 'suppliers', component : SuppliersComponent},
          { path: 'stores', component : StoresComponent},
          {path: 'edit_Stores_table/:id', component : EditStoreTableComponent},
          { path: 'product_top', component : ProductTopComponent},
          { path: 'reports', component : ReportsComponent},
          { path: 'pos', component : POSComponent},
          { path: 'expense_top_edit/:id', component :   ExpenseTopEditComponent},
          { path: 'category_edit_expense/:id', component :  CategoryEditExpenseComponent},
          { path: 'category_edit_product/:id', component : CategoryEditProductComponent},
          { path: 'edit_waiter/:id', component : EditWaiterComponent },
          { path: 'edit_customers/:id', component : EditCustomersComponent},
          {path:'edit_suppliers/:id', component: EditSuppliersComponent},
          { path: 'pos_next2/:id', component : POSNextComponent },
          {path : 'StoreTableAttachComponent/:id', component :StoreTableAttachComponent},
          { path: 'product_top_edit/:id', component :   ProductTopEditComponent },
          { path: 'setting', component : SettingComponent,
             children: [
                 { path: 'settingDemo', component : SettingDemoComponent  },
                 { path: 'users', component : UsersComponent  },
                 { path: 'warehouses', component :  WarehousesComponent  },
            ]
                },

            ]
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
