import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CleanCashPage } from '../clean-cash/clean-cash';
import { ReciclarPage } from '../reciclar/reciclar';
import { CajaPage } from '../caja/caja';
import { RecolecciNPage } from '../recolecci-n/recolecci-n';
import { CompartePage } from '../comparte/comparte';
import { DenunciaPage } from '../denuncia/denuncia';
import { PerfilPage } from '../perfil/perfil';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCleanCash(params){
    if (!params) params = {};
    this.navCtrl.push(CleanCashPage);
  }goToReciclar(params){
    if (!params) params = {};
    this.navCtrl.push(ReciclarPage);
  }goToCaja(params){
    if (!params) params = {};
    this.navCtrl.push(CajaPage);
  }goToRecolecciN(params){
    if (!params) params = {};
    this.navCtrl.push(RecolecciNPage);
  }goToComparte(params){
    if (!params) params = {};
    this.navCtrl.push(CompartePage);
  }goToDenuncia(params){
    if (!params) params = {};
    this.navCtrl.push(DenunciaPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
