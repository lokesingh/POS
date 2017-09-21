import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
import {CategoriesProductInterface} from './product.interface';
import {CategoriesProductService} from './product.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[CategoriesProductService]
})
export class ProductComponent implements OnInit {
// it is related to bootstrap modal
 @ViewChild('myModal')
    modal: ModalComponent;    // both are related to modal option
// interface declare
   categoriesProductInterfaces : CategoriesProductInterface[];
   categoriesProductInterface:  CategoriesProductInterface;
// variable declare
       categoryproductName: string ;
       categoCreateAt: string ;

   constructor(private router: Router, private categoriesProductService: CategoriesProductService) { }

  ngOnInit() {
      // get request call
     this.categoriesProductService.getCategoriesProductRequest()  // get the teacher value
          .subscribe( categoriesProductInterfaces  => {
            console.log( categoriesProductInterfaces )
             this.categoriesProductInterfaces  = categoriesProductInterfaces
          });
  }
  // it is used for modal function
close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
 redirect(_id) {
    this.router.navigate(['home/category_edit_product',_id]);
  }

// this function is used for add modal value
   addProduct() {
       console.log( this.categoryproductName);
       const newUser = {
              categoryproductName: this.categoryproductName,
              categoCreateAt: new Date
       }
              console.log(newUser);
              this.categoriesProductService.postCategoriesProducteRequest(newUser)
                   .subscribe( categoriesProductInterface=> {
                   this.categoriesProductInterfaces.push(categoriesProductInterface);
            //get request
            this.categoriesProductService.getCategoriesProductRequest()  // get the teacher value
            .subscribe( categoriesProductInterfaces  => {
              console.log( categoriesProductInterfaces )
               this.categoriesProductInterfaces  = categoriesProductInterfaces
            });
      })
}

// apply  for Delete method request
  deleteCategoriesProduct(id: any) {
         var categoriesProductInterfaces = this.categoriesProductInterfaces;
         this.categoriesProductService.deleteCategoriesProductRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < categoriesProductInterfaces.length; i++) {
                      if (categoriesProductInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                      categoriesProductInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }


}
