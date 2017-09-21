import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../home/users/user.interface';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   UserInterfaces: UserInterface[];
   userName: string ;
   userpassword: string;
  constructor(private router: Router,private http: Http,) { }

  ngOnInit() {
  }

  login() {
       const loginuser = {
         userName: this.userName,
         userpassword: this.userpassword
       }
        var headers = new Headers();
        console.log(loginuser);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/authenticate', loginuser , { headers: headers  })
        .map((res) => res.json())
        .subscribe(res => {
         let result = res;
         console.log(result);
         if ( result && result.token) {
             console.log('login suceesful') ;
              this.router.navigateByUrl('/home');
              localStorage.setItem('currentUser', JSON.stringify( result));
              console.log('currentUser');
              alert('User Name and Password valid');
              return true;
         } else {
              alert('User Name and Password Invalid');
              console.log('invalid user name');
              return false;
         }


        })
     }
}
