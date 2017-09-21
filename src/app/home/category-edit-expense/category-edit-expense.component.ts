import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CategoriesExpenseInterface} from '../expense/expeense.interface';
import {CategoriesExpenseService} from '../expense/expese.services';
@Component({
  selector: 'app-category-edit-expense',
  templateUrl: './category-edit-expense.component.html',
  styleUrls: ['./category-edit-expense.component.css'],
  providers:[CategoriesExpenseService]
})
export class CategoryEditExpenseComponent implements OnInit {
  id:any;
  private sub: any;
  category_expernseName: string ;
  category_CreateAt: string ;
  // interface declare
  categoriesExpenseInterface: CategoriesExpenseInterface[];
  constructor(private http: Http,
    private router: Router,
    private categoriesExpenseService:CategoriesExpenseService,
    private route : ActivatedRoute) {
     }

  ngOnInit() {
    // params define
    this.route.params.subscribe(params => this.id=params);
    console.log('this is params  id value',this.id);

      // get request call
     this.categoriesExpenseService.getCategoriesExpenseSingleRequest(this.id )
          .subscribe(  categoriesExpenseInterface => {
            console.log( categoriesExpenseInterface)
             this.categoriesExpenseInterface =  categoriesExpenseInterface.CategoryExpenseDetail
             this.category_expernseName=  categoriesExpenseInterface.CategoryExpenseDetail.category_expernseName;

          });
  }

  // update request
  updateCategory() {

            const newUser = {
              category_expernseName:this.category_expernseName,
              category_CreateAt: new Date
        }
            console.log(newUser);
             var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             console.log('show the value',newUser)
             alert('Sucessful Update your Data');
             return this.http.put('http://172.104.42.153:3005/api/catego_expense_update/'+this.id.id ,newUser, { headers: headers  })
             .map((res) => res.json())
             .subscribe(
              data => console.log(data))

            }
}
