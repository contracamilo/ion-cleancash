import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CleanCashPage } from '../pages/clean-cash/clean-cash';
import { CleanCash2Page } from '../pages/clean-cash2/clean-cash2';
import { PerfilPage } from '../pages/perfil/perfil';
import { ReciclaPage } from '../pages/recicla/recicla';
import { CajaPage } from '../pages/caja/caja';
import { CursoPage } from '../pages/curso/curso';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { RecolecciNPage } from '../pages/recolecci-n/recolecci-n';
import { RedimePage } from '../pages/redime/redime';
import { LoginPage } from '../pages/login/login';
import { SIngUpPage } from '../pages/s-ing-up/s-ing-up';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { RecolecciNUsuarioPage } from '../pages/recolecci-nusuario/recolecci-nusuario';
import { RecRecolectorPage } from '../pages/rec-recolector/rec-recolector';
import { Login2Page } from '../pages/login2/login2';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CleanCashPage,
    CleanCash2Page,
    PerfilPage,
    ReciclaPage,
    CajaPage,
    CursoPage,
    DenunciaPage,
    RecolecciNPage,
    RedimePage,
    LoginPage,
    SIngUpPage,
    TabsControllerPage,
    RecolecciNUsuarioPage,
    RecRecolectorPage,
    Login2Page,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CleanCashPage,
    CleanCash2Page,
    PerfilPage,
    ReciclaPage,
    CajaPage,
    CursoPage,
    DenunciaPage,
    RecolecciNPage,
    RedimePage,
    LoginPage,
    SIngUpPage,
    TabsControllerPage,
    RecolecciNUsuarioPage,
    RecRecolectorPage,
    Login2Page,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}