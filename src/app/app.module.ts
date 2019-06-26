import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TotalProvider } from '../providers/total/total';

import { CategoryPage } from '../pages/category/category';
import { TotalPage } from '../pages/total/total';
import { HttpClientModule } from '@angular/common/http';
import { QuizzAreaPage } from '../pages/quizz-area/quizz-area';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    TotalPage,
    QuizzAreaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    TotalPage,
    QuizzAreaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TotalProvider
  ]
})
export class AppModule {}
