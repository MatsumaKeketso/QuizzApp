import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public toastCont: ToastController) { }
  toCategory(){
    this.navCtrl.push(CategoryPage);
  }
  async exitApp(){
    const toast = this.toastCont.create({
      message: 'App Exited',
      duration: 1000
    });
    toast.present();
  }
}
