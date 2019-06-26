import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TotalProvider } from '../../providers/total/total';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { TotalPage } from '../total/total';
@IonicPage()
@Component({
  selector: 'page-quizz-area',
  templateUrl: 'quizz-area.html',
})
export class QuizzAreaPage {
  @ViewChild('slides') slides: Slides;
  data: any; // data to loop through
  title: any; // category to display
  constructor(public navCtrl: NavController, public navParams: NavParams, private totalProv: TotalProvider) {
  }

  ionViewDidLoad() {
    // set the quiz data from the provider
    this.data = this.totalProv.data;
    // set the title category
    this.title = this.navParams.data;
    this.slides.lockSwipeToPrev(true);
    if  (this.slides.isEnd() == true){
      this.slides.slideTo(1);
    }

  }
  async answer(value){
    // were getting a boolean value from value above
  if (value){
    console.log('Correct');
    this.totalProv.setTotal(20);
  }
    this.slides.slideNext();
  }
  toTotal(){
    this.navCtrl.push(TotalPage, this.navParams.data);
  }
}
