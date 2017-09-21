import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CategoriesProductInterface} from '../product/product.interface';
import {CategoriesProductService} from '../product/product.services';
@Component({
  selector: 'app-category-edit-product',
  templateUrl: './category-edit-product.component.html',
  styleUrls: ['./category-edit-product.component.css'],
  providers:[CategoriesProductService]
})
export class CategoryEditProductComponent implements OnInit {
  id:any;
  private sub: any;
  // interface declare
  categoriesProductInterface:CategoriesProductInterface[];
  categoryproductName: string;
  constructor(private http: Http,
    private router: Router,
    private categoriesProductService:CategoriesProductService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this. categoriesProductService.getCategoriesProductSingleRequest(this.id )
            .subscribe(  categoriesProductInterface => {

               this.categoriesProductInterface =  categoriesProductInterface.CategoryProductDetail
               this.categoryproductName = categoriesProductInterface.CategoryProductDetail.categoryproductName
               console.log( categoriesProductInterface)

            });
    }


    // update request
    updateCategory() {

        const newUser = {
          categoryproductName:this.categoryproductName,
          categoCreateAt: new Date
    }
        console.log(newUser);
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         console.log('show the value',newUser)
         alert('Sucessful Update your Data');
         return this.http.put('http://172.104.42.153:3005/api/catego_produc_update/'+this.id.id ,newUser, { headers: headers  })
         .map((res) => res.json())
         .subscribe(
          data => console.log(data))

        }

}
