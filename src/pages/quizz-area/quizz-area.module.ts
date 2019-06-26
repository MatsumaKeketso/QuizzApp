import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizzAreaPage } from './quizz-area';

@NgModule({
  declarations: [
    QuizzAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizzAreaPage),
  ],
})
export class QuizzAreaPageModule {}
