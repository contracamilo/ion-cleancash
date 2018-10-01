import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CajaPage } from '../caja/caja';
import { RecolecciNPage } from '../recolecci-n/recolecci-n';

@Component({
  selector: 'page-reciclar',
  templateUrl: 'reciclar.html'
})
export class ReciclarPage {

  constructor(public navCtrl: NavController) {
  }
  goToCaja(params){
    if (!params) params = {};
    this.navCtrl.push(CajaPage);
  }goToRecolecciN(params){
    if (!params) params = {};
    this.navCtrl.push(RecolecciNPage);
  }
}
