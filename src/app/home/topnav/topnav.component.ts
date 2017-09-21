import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import {UserInterface} from '../users/user.interface';
import {UserService} from '../users/user.services';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  providers:[UserService]
})
export class TopnavComponent implements OnInit {
  // user interface
 UserInterfaces: UserInterface[];

 constructor(private router: Router,  private http: Http,private userService:UserService) { }

  ngOnInit() {
    // user compoenent get request call
     this.userService.getUserRequest()
          .subscribe(  UserInterfaces => {
            console.log( UserInterfaces)
             this.UserInterfaces =  UserInterfaces;
             console.log(this.UserInterfaces);
          });
  }
clicked() {
     // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
          this.router.navigateByUrl('/login');
          console.log('token delet');
  }
}
