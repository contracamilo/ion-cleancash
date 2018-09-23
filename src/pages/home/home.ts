import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CoversationPage} from '../coversation/coversation';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //lo que va aqui se covierte en una propiedad global de la clase
   

  }
  goToConversation(){
    this.navCtrl.push(CoversationPage)
}
  goToLogin(){
    this.navCtrl.push(LoginPage)
  }


}
