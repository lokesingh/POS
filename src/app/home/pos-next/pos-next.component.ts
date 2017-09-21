import { Component, OnInit } from '@angular/core';
import { StoreInterface} from '../stores/store-interface';
import {StoreService } from '../stores/store.services';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { StoreTableInterface} from '../store-table-attach/store_table.interface';
import {StoreTableService} from '../store-table-attach/storetable.services'
import {PosInterface} from '../pos-add-//pos.add.interface';
import {POSService } from '../pos-add-/pos.add.services';

@Component({
  selector: 'app-pos-next',
  templateUrl: './pos-next.component.html',
  styleUrls: ['./pos-next.component.css'],
  providers:[StoreService,StoreTableService,POSService],
})
export class POSNextComponent implements OnInit {
  // interface define for store component
  storeInterfaces: StoreInterface[];
  storeTableInterface:  StoreTableInterface[];
  posInterfaces:PosInterface[];
  id:any;
  private sub: any;
  // variable declare
  storeTable : string;
  zoneName : string;
  zonecode :string;
  status:string;
  Posid:string;
  statuss:boolean

  constructor(private storeService: StoreService,
              private router: Router, private http: Http,
              private storeTableService: StoreTableService, private route : ActivatedRoute,private posService:POSService) { }

  ngOnInit() {
    // params define
    this.route.params.subscribe(params => this.id=params);
    console.log('this is params  id value',this.id);
    // get request call
    /*this.storeService.getStoreRequest()
         .subscribe(  storeInterfaces => {
           console.log( storeInterfaces)
            this.storeInterfaces =  storeInterfaces
            console.log(this.storeInterfaces);
         });*/

      // it is used for get the single value table
      this.storeTableService.getStoreTableRequest(this.id)
      .subscribe(  storeTableInterface => {
     //  console.log( storeTableInterface)
       this.storeTableInterface =  storeTableInterface;
      // console.log('table value', this.storeTableInterface);

});


}
  redirect(id) {
    console.log('call the get value',id)

// get single value  request call ans show the value on display

       this.router.navigate(['home/PosAddComponent',id]);

  }
}

