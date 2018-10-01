import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CleanCashPage } from '../clean-cash/clean-cash';
import { LoginPage } from '../login/login';
import { SIngUpPage } from '../s-ing-up/s-ing-up';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CleanCashPage;
  tab2Root: any = LoginPage;
  tab3Root: any = SIngUpPage;
  constructor(public navCtrl: NavController) {
  }
  
}
