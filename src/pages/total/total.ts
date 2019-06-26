import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TotalProvider } from '../../providers/total/total';
import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';
import { QuizzAreaPage } from '../quizz-area/quizz-area';

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
  title: string; // feedback
  message: string; // feedback
  grandTotal: number; // total after quizz
  className = 'normal'; // css class name
  questionTitle: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private totalProvider: TotalProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPage');
    // get total from provider
    this.grandTotal = this.totalProvider.grandTotal;
    // set properties conditionally
    if (this.grandTotal <= 20){
      this.className = 'red';
      this.title = 'DONE BAD';
      this.message = 'You need to read more. Pay attention to the world. :|';
    } else if ( this.grandTotal <= 40){
      this.className = 'red';
      this.title = 'BARELY';
      this.message = 'Maybe with a little more exposure to the people around you, you might just be above average. :P';
    } else if(this.grandTotal <= 60) {
      this.className = 'orange';
      this.title = 'IS ALMOST ENOUGH?';
      this.message = 'I would encourage but that might spoil you mind. Good Try.';
    } else if (this.grandTotal <= 80){
      this.className = 'orange'; // set the total color
      this.title = 'SMILES'; // set the title
      this.message = 'Beautiful, not bad.'; // set the message
    } else {
      this.className = 'green';
      this.title = 'AMAZING';
      this.message = 'Are you even human to know so much. Well done.';
    }
    console.log(this.navParams.data);

    this.questionTitle = this.navParams.data;
  }
  tryAgain(){
    this.totalProvider.resetScore(); // resets score in the provider
    this.navCtrl.push(QuizzAreaPage, this.questionTitle); // navigates to category selection
  }
  nextTime(){
    this.totalProvider.resetScore();
    this.navCtrl.push(HomePage);
  }
}
