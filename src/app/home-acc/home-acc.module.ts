import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAccPageRoutingModule } from './home-acc-routing.module';

import { HomeAccPage } from './home-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAccPageRoutingModule
  ],
  declarations: [HomeAccPage]
})
export class HomeAccPageModule {}
