import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import { StoreTableInterface} from './store_table.interface';
import {StoreTableService} from './storetable.services';
@Component({
  selector: 'app-store-table-attach',
  templateUrl: './store-table-attach.component.html',
  styleUrls: ['./store-table-attach.component.css'],
  providers:[StoreTableService]
})
export class StoreTableAttachComponent implements OnInit {
  id:any;
  _id:any ; //  it is used for get single element
  private sub: any;
  // it is relaetd to modal componenent
  @ViewChild('myModal')
    modal: ModalComponent;
    Tablemodal:ModalComponent;
    editmodal:ModalComponent;
  // interface declare
   storeTableInterfaces :StoreTableInterface[];
   storeZoneInterface :StoreTableInterface[]
   storeTables: StoreTableInterface[];
  // variable declare
        zoneName: string;
        zonename1:string; // this is variable used for single value show on modal
        zonecode: string;
        storeTable: string;

   constructor(private http: Http,
              private storeTableService: StoreTableService,
              private router: Router, private route : ActivatedRoute ) {

               }

  ngOnInit() {

     // params define
     this.route.params.subscribe(params => this.id=params);

     console.log('this is params  id value',this.id);
  // this request is part of the Store Zone part
     this.storeTableService.getStoreZoneRequest(this.id)

          .subscribe( storeTableInterfaces => {
               console.log( storeTableInterfaces)
               this.storeTableInterfaces =  storeTableInterfaces
               console.log('show the id',storeTableInterfaces.zoneName);


          });

  // this request is used for get the single value

  this.storeTableService.getStoreZoneSingleRequest(this.id)
                         .subscribe(  storeZoneInterface => {
                          console.log('get the single id',this.id)
                          console.log( storeZoneInterface)
                           this. storeZoneInterface =  storeZoneInterface.StoreZone
                           this.zonename1= storeZoneInterface.StoreZone.zoneName
                         console.log('store zone get single value',this.storeZoneInterface);
        });
  // this request is part of the Store Table part
  this.storeTableService.getStoreTableRequest(this.id)
                         .subscribe(  storeTableInterface => {
                          console.log( storeTableInterface)
                          this.storeTables =  storeTableInterface

                         console.log(this.storeTables);
          });

  }

   // update method for attach the method

  // update request
  updateStoreZone() {

               const newUser = {
                zonename1:this.zonename1
        }
            console.log(newUser);
             var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             console.log('show the value',newUser)
             alert('Sucessful Update your Data');
             return this.http.put('http://172.104.42.153:3005/api/store_Zone_update/'+this.id.id ,newUser, { headers: headers  })
             .map((res) => res.json())
             .subscribe(
              data => console.log(data))

            }

  // it it used for route
  redirect(_id) {
    console.log('routing id',_id)
    this.router.navigate(['home/edit_Stores_table',_id]);
  }

// function declare for modal opeation perform
 close() {
        this.modal.close();
        this.Tablemodal.close();
        this.editmodal.close();
    }

  /*  open(_id) {
        this.modal.open();
        this.Tablemodal.open();
        this.editmodal.open();
        console.log('show the edit id',_id);

    }*/
  // this is funciton used for add the Zone method
  addZone() {
    console.log( this.zoneName);
       const newUser = {

              zoneName: this.zoneName,
              zonecode : this.id.id,

       }
       console.log('zonecode',this.zonecode);
       console.log(newUser);
      this.storeTableService.postStoreZoneRequest(newUser)
          .subscribe( storeTableInterface=> {
          this.storeTableInterfaces.push(storeTableInterface);
      // get the value
      this.storeTableService.getStoreZoneRequest(this.id)
      .subscribe(  storeTableInterfaces => {
           console.log( storeTableInterfaces)
           this.storeTableInterfaces =  storeTableInterfaces
           console.log(this.storeTableInterfaces);
      });
          })

      }
  // this is funciton used for delete the Zone method
  deleteStoreZone(id: any) {
         var storeTableInterfaces = this.storeTableInterfaces;
         this.storeTableService.deleteStoreZoneRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < storeTableInterfaces.length; i++) {
                      if (storeTableInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                       storeTableInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }



// Note:- we will write for Store Table Value

addTable() {
    console.log( this.zoneName);
       const newUser = {
              storeTable :this.storeTable,
              zoneName: this.zoneName,
              zonecode : this.id.id,
       }
       console.log(newUser);
      this.storeTableService.postStoreTableRequest(newUser)
          .subscribe( storeTableInterface=> {
          this.storeTables.push(storeTableInterface);
      // this request is part of the Store Table part
  this.storeTableService.getStoreTableRequest(this.id)
        .subscribe(  storeTableInterface => {
        console.log( storeTableInterface)
       this.storeTables =  storeTableInterface

  console.log(this.storeTables);
});
          })
      }
// this is funciton used for delete the Time method
 deleteStoreTable(id: any) {
         var storeTables = this.storeTables;
         this.storeTableService.deleteStoreTableRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  <storeTables.length; i++) {
                      if (storeTables[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                       storeTables.splice(i, 1);
                      }
                 }
              }
            })
    }
}
