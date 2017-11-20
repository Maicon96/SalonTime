import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalonTimePage } from '../salon-time/salon-time';
import { CadastroUsuRioPage } from '../cadastro-usu-rio/cadastro-usu-rio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToSalonTime(params){
    if (!params) params = {};
    this.navCtrl.push(SalonTimePage);
  }goToCadastroUsuRio(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroUsuRioPage);
  }
}
