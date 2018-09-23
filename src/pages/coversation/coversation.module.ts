import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoversationPage } from './coversation';

@NgModule({
  declarations: [
    CoversationPage,
  ],
  imports: [
    IonicPageModule.forChild(CoversationPage),
  ],
})
export class CoversationPageModule {}
