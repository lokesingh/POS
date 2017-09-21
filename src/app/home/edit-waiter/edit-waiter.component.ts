import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {WaitersInterface} from '../waiters/waiters-Interface';
import {WaiterService} from '../waiters/waiters.services';

@Component({
  selector: 'app-edit-waiter',
  templateUrl: './edit-waiter.component.html',
  styleUrls: ['./edit-waiter.component.css'],
  providers:[WaiterService],
})
export class EditWaiterComponent implements OnInit {
  id:any;
  private sub: any;
  waiterName: string ;
  waiterPhone: string ;
  waiterEmail:  string ;
  waiterStore: string ;
  waiterCreateAt: string;
// interface declare
  waitersInterface :WaitersInterface[]
  constructor(private http: Http,
    private router: Router,
    private waiterService:WaiterService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this.waiterService.getWaitersSingleRequest(this.id )
            .subscribe(   waitersInterface => {

               this.waitersInterface =   waitersInterface.WaitersDetail
               this.waiterName = waitersInterface.WaitersDetail.waiterName
               this.waiterPhone = waitersInterface.WaitersDetail.waiterPhone
               this.waiterEmail = waitersInterface.WaitersDetail.waiterEmail
               this.waiterStore = waitersInterface.WaitersDetail.waiterStore

               console.log(  waitersInterface);

            });
    }

    updateWaiter() {

          const newUser = {
            waiterName: this.waiterName,
            waiterPhone: this.waiterPhone,
            waiterEmail:  this.waiterEmail,
            waiterStore: this.waiterStore,
            waiterCreateAt: new Date

      }
          console.log(newUser);
           var headers = new Headers();
           headers.append('Content-Type', 'application/json');
           console.log('show the value',newUser)
           alert('Sucessful Update your Data');
           return this.http.put('http://172.104.42.153:3005/api/people_waiter_update/'+this.id.id ,newUser, { headers: headers  })
           .map((res) => res.json())
           .subscribe(
            data => console.log(data))

          }

}
