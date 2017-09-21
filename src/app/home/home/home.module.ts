import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component, Pipe, PipeTransform} from '@angular/core'
import { HomeComponent  } from './home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { routing } from './home.routing';
import { TopnavComponent } from '../topnav/topnav.component';
import { FooterComponent } from '../footer/footer.component';
import {SettingModule} from '../setting/setting.module';

import {AuthGuard} from './auth.guard';
import { POSNextComponent } from '../pos-next/pos-next.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SettingModule,
  ],
  declarations: [
    HomeComponent,
    TopnavComponent,
    FooterComponent, POSNextComponent
    ],
   providers: [AuthGuard]
})
export class HomeModule { }
