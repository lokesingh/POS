import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http } from '@angular/http';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import {Expense_Top_Interface} from '../expense-top-nav/expense-top.Interface';
import {Expense_TopService} from '../expense-top-nav/expense-top.services';
@Component({
  selector: 'app-expense-top-edit',
  templateUrl: './expense-top-edit.component.html',
  styleUrls: ['./expense-top-edit.component.css'],
  providers:[Expense_TopService]
})
export class ExpenseTopEditComponent implements OnInit {
  expense_Top_Interfaces :Expense_Top_Interface[] ;
  id:any;
  expenseDate: string ;
  expenseReference:  string ;
  expenseCategory: string ;
  expenseStore: string ;
  expenseAmount: string ;
  expenseFileImage: string ;
  expenseParagraph: string
  expenseCreatedBy: string;
  private sub: any;
  constructor(private http: Http,
    private router: Router,
    private expense_TopService: Expense_TopService,
    private route : ActivatedRoute) {
     }

  ngOnInit() {
    // params define
    this.route.params.subscribe(params => this.id=params);
    console.log('this is params  id value',this.id);

      // get request call
     this.expense_TopService.getExpenseSingleRequest(this.id )
          .subscribe(  expense_Top_Interfaces => {

             this.expense_Top_Interfaces =  expense_Top_Interfaces.ExpenseDetail
             this.expenseDate  =  expense_Top_Interfaces.ExpenseDetail.expenseDate
             this.expenseReference   =  expense_Top_Interfaces.ExpenseDetail.expenseReference
             this.expenseCategory  =  expense_Top_Interfaces.ExpenseDetail.expenseCategory
             this.expenseStore   =  expense_Top_Interfaces.ExpenseDetail.expenseStore
             this.expenseAmount =  expense_Top_Interfaces.ExpenseDetail.expenseAmount
             this.expenseFileImage =  expense_Top_Interfaces.ExpenseDetail.expenseFileImage
             this.expenseParagraph =  expense_Top_Interfaces.ExpenseDetail.expenseParagraph
             console.log( expense_Top_Interfaces)
          });

  }

  // update request
  updateExpense() {

        const newUser = {
          expenseDate: this.expenseDate,
          expenseReference:  this.expenseReference,
          expenseCategory: this.expenseCategory,
          expenseStore: this.expenseStore,
          expenseAmount: this.expenseAmount,
          expenseFileImage: this.expenseFileImage,
          expenseParagraph:  this.expenseParagraph,
          expenseCreatedBy: new Date


    }
        console.log(newUser);
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         console.log('show the value',newUser)
         alert('Sucessful Update your Data');
         return this.http.put('hhttp://172.104.42.153:3005/api/people_suppliers_update/'+this.id.id ,newUser, { headers: headers  })
         .map((res) => res.json())
         .subscribe(
          data => console.log(data))

        }

}
