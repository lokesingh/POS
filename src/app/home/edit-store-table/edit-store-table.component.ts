import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreTableInterface} from '../store-table-attach/store_table.interface';
import {StoreTableService} from '../store-table-attach/storetable.services';

@Component({
  selector: 'app-edit-store-table',
  templateUrl: './edit-store-table.component.html',
  styleUrls: ['./edit-store-table.component.css'],
  providers:[StoreTableService]
})
export class EditStoreTableComponent implements OnInit {
  id:any;
  private sub: any;
  // interface declare
  storeTableInterface : StoreTableInterface[];
  // variable decalre
     zoneName: string;
     storeTable: string;
     zonecode: string

  constructor(private http: Http,
    private router: Router,
    private storeTableService:StoreTableService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this.storeTableService.getStoreTableSingleRequest(this.id )
            .subscribe( storeTableInterface => {

               this.storeTableInterface =  storeTableInterface.StoreTableDetail
               this.zoneName=  storeTableInterface.StoreTableDetail.zoneName
                this.storeTable=  storeTableInterface.StoreTableDetail.storeTable


               console.log( this.storeTableInterface)

            });
    }

    // update request
    updateStoreTable() {

              const newUser = {
                zoneName:this.zoneName,
                storeTable: this.storeTable
          }
              console.log(newUser);
               var headers = new Headers();
               headers.append('Content-Type', 'application/json');
               console.log('show the value',newUser)
               alert('Sucessful Update your Data');
               return this.http.put('http://172.104.42.153:3005/api/store_Table_update/'+this.id.id ,newUser, { headers: headers  })
               .map((res) => res.json())
               .subscribe(
                data => console.log(data))

              }


}
