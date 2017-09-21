import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http, HttpModule } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {UserService} from '../users/user.services';
import {UserInterface} from '../users/user.interface';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService],
})
export class EditUserComponent implements OnInit {
 // user interface
 UserInterfaces: UserInterface[];
 id:any;
 // variable declare
 userFirstName: string;
 userName: string;
 userLastName: string;
 userEmail: string;
 private sub: any;

  constructor(private http: Http,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {}


  ngOnInit() {
     // params define
     this.route.params.subscribe(params => this.id = params);


     // get request call
     this.userService.getWarehouseSingleRequest(this.id )
     .subscribe(  UserInterfaces => {
        this.UserInterfaces = UserInterfaces.userDetail,
        console.log('this.userFirstName', this.UserInterfaces)
        this.userName = UserInterfaces.userDetail.userName,
        this.userFirstName = UserInterfaces.userDetail.userFirstName,
        this.userLastName = UserInterfaces.userDetail.userLastName,
        this.userEmail = UserInterfaces.userDetail.userEmail;

        console.log('this.userFirstName', this.userFirstName);

     });
  }

  fileChanged(e: Event) {
    var target: HTMLInputElement = e.target as HTMLInputElement;
    for ( var i = 0;i < target.files.length; i++) {
        this.upload(target.files[i]);
    }
}

upload(img: File) {
  var formData: FormData = new FormData();
  formData.append('image', img, img.name);

  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (ev: ProgressEvent) => {
      // You can handle progress events here if you want to track upload progress
               // (I used an observable<number> to fire back updates to whomever called this upload)
  });
  xhr.open('POST', 'http://172.104.42.153:3005/uploadFile', true);
  xhr.send(formData);
}
}
