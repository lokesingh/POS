

import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router,ActivatedRoute, Params, Data} from '@angular/router';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import {UserInterface} from './user.interface';
import {UserService} from './user.services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
    moduleId: module.id.toString(),
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService ]
})
export class UsersComponent implements OnInit {
  // it is related to modal  component
  @ViewChild('myModal')
    modal: ModalComponent;
 // user interface
 UserInterfaces: UserInterface[];
 UserInterface: UserInterface;

 today: number = Date.now();
 // variable declaration
    userName: string ;
    userFirstName: string ;
    userLastName: string ;
    userRole: string ;
    userEmail: string ;
    userpassword: string;
    useractivityDate: string;

  constructor(  private router: Router,private http: Http, private  userService: UserService, private route: Router  ) { }

  ngOnInit() {
    // get request call
     this.userService.getUserRequest()  // get the teacher value
          .subscribe(  UserInterfaces => {
            console.log( UserInterfaces)
             this.UserInterfaces =  UserInterfaces;
             console.log(this.UserInterfaces);
          });

  }    // it is related to modal modal button
    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();

    }
      // this is used for routing
       redirect(_id) {
    this.router.navigate(['home/edit_user',_id]);
  }

// apply for post method for modal option
 addUser() {
    console.log( this.userFirstName);
       const newUser = {
              userName: this.userName,
              userFirstName: this.userFirstName,
              userLastName: this.userLastName,
              userRole: this.userRole,
              userEmail: this.userEmail,
              userpassword: this.userpassword,
              useractivityDate: new Date


       }
              console.log(newUser);
              this.userService.postUserRequest(newUser)
                   .subscribe( UserInterface=> {
                   this.UserInterfaces.push(UserInterface);

   })
}
}
