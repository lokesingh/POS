import { Component,  ViewChild, OnInit,Pipe, PipeTransform } from '@angular/core';
export class Pos {

      descr = this.productName + ' ' + this.productPriceINR+ ' ' +this.CGST + ' ' + this.SGST+ ' '
       + this.IGST+ ' ' + this.price+ ' ' + this.difference +' ' + this.differentCGST+ ' '
       + this.differentSGST+ ' ' + this.differentIGST;

      constructor(public productName:string, public productPriceINR:string,
        public POSquanity:string,public CGST:string,
        public SGST:string,public IGST:string,public price:string,public difference: string,public differentCGST:string,
        public differentSGST:string,public differentIGST:string){
      }
    }
export class Item
{
  constructor( public productPriceINR:string,
    public POSquanity:string,public CGST:string,
    public SGST:string,public IGST:string){
  }

}
