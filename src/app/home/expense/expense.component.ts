import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
import {CategoriesExpenseInterface} from './expeense.interface';
import {CategoriesExpenseService} from './expese.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers:[CategoriesExpenseService]
})
export class ExpenseComponent implements OnInit {
// this is related to bootstrap modal
  @ViewChild('myModal')
    modal: ModalComponent;

// interface declare
    categoriesExpenseInterfaces : CategoriesExpenseInterface[];
    categoriesExpenseInterface : CategoriesExpenseInterface;
// variable declare
       category_expernseName: string ;
       category_CreateAt: string ;    

  constructor(private router: Router, private  categoriesExpenseService : CategoriesExpenseService) { }


  ngOnInit() {
    // get request call
     this.categoriesExpenseService.getCategoriesExpenseRequest()  // get the teacher value
          .subscribe( categoriesExpenseInterfaces  => {
            console.log( categoriesExpenseInterfaces )
             this.categoriesExpenseInterfaces  = categoriesExpenseInterfaces 
          });
  }
  // it is used for modal operation perform
  close() {
        this.modal.close();
    }

  open() {
        this.modal.open();
    }
      // it is used for redirect operation perform.
      redirect(_id) {
    this.router.navigate(['home/category_edit_expense',_id]);
  }
    
  // this function is used for add modal value
  addExpense() {
       console.log( this.category_expernseName);
       const newUser = {
             category_expernseName: this.category_expernseName ,
             category_CreateAt: new Date  
       }
              console.log(newUser);
              this.categoriesExpenseService.postCategoriesExpenseeRequest(newUser)
                   .subscribe( categoriesProductInterface=> {
                   this.categoriesExpenseInterfaces.push(categoriesProductInterface);
                   // get request call
               this.categoriesExpenseService.getCategoriesExpenseRequest()  // get the teacher value
                   .subscribe( categoriesExpenseInterfaces  => {
                   console.log( categoriesExpenseInterfaces )
                   this.categoriesExpenseInterfaces  = categoriesExpenseInterfaces 
               });
      })
  }
      // apply  for Delete method request
  deleteCategoriesExpense(id: any) {
         var categoriesExpenseInterfaces = this.categoriesExpenseInterfaces;
         this.categoriesExpenseService.deleteCategoriesExpenseRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < categoriesExpenseInterfaces.length; i++) {
                      if (categoriesExpenseInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                      categoriesExpenseInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }
}
