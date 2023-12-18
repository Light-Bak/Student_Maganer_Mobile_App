import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAccPage } from './home-acc.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAccPageRoutingModule {}
