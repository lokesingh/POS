import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {CKEditorModule} from 'ng2-ckeditor';
import {Router} from '@angular/router';
import {Expense_Top_Interface} from './expense-top.Interface';
import {Expense_TopService} from './expense-top.services';
import { StoreInterface} from '../stores/store-interface';
import {StoreService } from '../stores/store.services';
import {CategoriesExpenseInterface} from '../expense/expeense.interface';
import {CategoriesExpenseService} from '../expense/expese.services';
import {UserInterface} from '../users/user.interface';
import {UserService} from '../users/user.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@Component({
  selector: 'app-expense-top-nav',
  templateUrl: './expense-top-nav.component.html',
  styleUrls: ['./expense-top-nav.component.css'],
  providers:[Expense_TopService,StoreService,CategoriesExpenseService,UserService]
})
export class ExpenseTopNavComponent implements OnInit {
// there are relaetd to modal t option.
   @ViewChild('myModal')
    modal: ModalComponent; 

// interface declare
    expense_Top_Interfaces :Expense_Top_Interface[] ;
    expense_Top_Interface:Expense_Top_Interface;

// interface part of the store component
    storeInterfaces :StoreInterface[] ;
    storeInterface : StoreInterface;  

// interface part of the Categories_expense
  categoriesExpenseInterfaces : CategoriesExpenseInterface[];
  categoriesExpenseInterface  : CategoriesExpenseInterface;  

// interface declare    which is part of the Users component
   UserInterfaces: UserInterface[];
   UserInterface: UserInterface;
   selectValue:string;

// variable declare
    expenseDate: string ;
    expenseReference:  string ;
    expenseCategory: string ;
    expenseStore: string ;
    expenseAmount: string ;
    expenseFileImage: string ;
    expenseParagraph: string 
    expenseCreatedBy: string;    

   constructor(private router: Router, 
               private expense_TopService:Expense_TopService, 
               private storeService:StoreService, 
               private categoriesExpenseService: CategoriesExpenseService, 
               private userService :UserService ) {
                 
               }

  ngOnInit() {
    // get request call
     this.expense_TopService.getExpense_TopsRequest()  
          .subscribe(  expense_Top_Interfaces => {
            console.log( expense_Top_Interfaces)
             this.expense_Top_Interfaces = expense_Top_Interfaces
          });

    // part of the Categories_expense component get request
    // get request call
     this.storeService.getStoreRequest()  // get the teacher value
          .subscribe(  storeInterfaces => {
            console.log( storeInterfaces)
             this.storeInterfaces =  storeInterfaces
             console.log(this.storeInterfaces);
          }); 
    // part of the store component get request
    // get request call
     this.categoriesExpenseService.getCategoriesExpenseRequest()  // get the teacher value
          .subscribe( categoriesExpenseInterfaces  => {
            console.log( categoriesExpenseInterfaces )
             this.categoriesExpenseInterfaces  = categoriesExpenseInterfaces 
          });  
     // this is part of the  Users component       
    // get request call
     this.userService.getUserRequest()  // 
          .subscribe(  UserInterfaces => {
            console.log( UserInterfaces)
             this.UserInterfaces =  UserInterfaces
             console.log(this.UserInterfaces);
          });// get request call

    // get the single value   
   
      
         

  }
        // it is realed to modal function
close() {
        this.modal.close();
    }
    open() {
        this.modal.open();
    }  

     redirect(_id) {
    this.router.navigate(['home/expense_top_edit',_id]);
    
  }
    // apply for value store in data base
   addExpense_Top() {
    console.log( this.expenseDate);
       const newUser = {
            expenseDate: this.expenseDate ,
            expenseReference: this.expenseReference ,
            expenseCategory: this.expenseCategory,
            expenseStore: this.expenseStore,
            expenseAmount: this.expenseAmount,
            expenseFileImage: this.expenseFileImage,
            expenseParagraph: this.expenseParagraph,
             expenseCreatedBy: this.expenseCreatedBy 
       }
              console.log(newUser);
              this.expense_TopService.postExpense_TopRequest(newUser)
                   .subscribe( expense_Top_Interface=> {
                   this.expense_Top_Interfaces.push( expense_Top_Interface);
                   this.expense_TopService.getExpense_TopsRequest()  
                   .subscribe(  expense_Top_Interfaces => {
                     console.log( expense_Top_Interfaces)
                      this.expense_Top_Interfaces = expense_Top_Interfaces
                   });
             })
  
}
  // apply  for Delete method request
  deleteExpense_Top(id: any) {
         var  expense_Top_Interfaces = this.expense_Top_Interfaces;
         this.expense_TopService.deleteExpense_TopRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  <  expense_Top_Interfaces.length; i++) {
                      if ( expense_Top_Interfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                        expense_Top_Interfaces.splice(i, 1);
                      }
                 }
              }
            })
    }

}
