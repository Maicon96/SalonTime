import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SalonTimePage } from '../pages/salon-time/salon-time';
import { LoginPage } from '../pages/login/login';
import { CalendarioPage } from '../pages/calendario/calendario';
import { CadastroUsuRioPage } from '../pages/cadastro-usu-rio/cadastro-usu-rio';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SalonTimePage,
    LoginPage,
    CalendarioPage,
    CadastroUsuRioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalonTimePage,
    LoginPage,
    CalendarioPage,
    CadastroUsuRioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}