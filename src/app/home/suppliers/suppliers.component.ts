import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {CKEditorModule} from 'ng2-ckeditor';
import { Routes, RouterModule , Router } from '@angular/router';
import { SupplyInterface} from './supplers-interface';
import {SupplyService} from './supplers-services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
  providers:[SupplyService]
})
export class SuppliersComponent implements OnInit {
  // it is related to modal  option
@ViewChild('myModal')
    modal: ModalComponent;

// here declare the interface
    supplyInterfaces: SupplyInterface[];


// VAriable declaration
      suppliersName: string;
      suppliersPhone: string;
      suppliersEmail: string;
      supplierDate: string;
      suppliersStore: string;

  constructor(private http: Http, private router: Router,private supplyService: SupplyService ) { }
  ngOnInit() {
    // get request call
     this.supplyService.getSupplyRequest()  // get the teacher value
          .subscribe(  supplyInterfaces => {
            console.log( supplyInterfaces)
             this.supplyInterfaces =  supplyInterfaces;
             console.log(this.supplyInterfaces);
          });
  }
        // close and open function related to modal
 close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
      // it it used for route
     redirect(_id) {
    this.router.navigate(['home/edit_suppliers',_id]);
  }
       // apply for post method
    addSupplier() {
    console.log( this.suppliersName);
       const newUser = {
               suppliersName:this.suppliersName,
               suppliersPhone: this.suppliersPhone,
               suppliersEmail: this.suppliersEmail,
               supplierDate: new  Date,
               suppliersStore: this.suppliersStore

       }
            console.log(newUser);
            this.supplyService. postSupplyeRequest(newUser)
                   .subscribe( supplyInterface=> {
                   this.supplyInterfaces.push(supplyInterface);
            // get request call
            this.supplyService.getSupplyRequest()  // get the teacher value
                   .subscribe(  supplyInterfaces => {
                    console.log( supplyInterfaces)
                    this.supplyInterfaces =  supplyInterfaces
                    console.log(this.supplyInterfaces);
     });

   })
}

 // apply  for Delete method request
  deleteSupply(id: any) {
         var supplyInterfaces = this.supplyInterfaces;
         this.supplyService.deleteSupplyRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < supplyInterfaces.length; i++) {
                      if (supplyInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                      supplyInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }


}
