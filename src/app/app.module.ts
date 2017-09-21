import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule, FormControl,FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  HomeModule  } from './home/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    routing,
     HttpModule,
     FormsModule,  ReactiveFormsModule,
    RouterModule,
    RouterModule,
    HomeModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
