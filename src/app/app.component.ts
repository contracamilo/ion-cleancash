import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { RecolecciNPage } from '../pages/recolecci-n/recolecci-n';
import { RedimePage } from '../pages/redime/redime';
import { CursoPage } from '../pages/curso/curso';


import { CleanCashPage } from '../pages/clean-cash/clean-cash';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = CleanCashPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToDenuncia(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DenunciaPage);
  }goToRecolecciN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RecolecciNPage);
  }goToRedime(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RedimePage);
  }goToCurso(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CursoPage);
  }goToCleanCash(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CleanCashPage);
  }
}
