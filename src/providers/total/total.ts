import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TotalProvider {
  grandTotal: number = 0;
  perfMessage: string;

  data: any;
  constructor(public http: HttpClient) {
  }
  ionViewDidLoad() {
  }
  setTotal(val: any){
   this.grandTotal = this.grandTotal + val;
  }
  resetScore(){
    this.grandTotal = 0;
  }
  setData(value: any){
    this.data = value;
  }
}
