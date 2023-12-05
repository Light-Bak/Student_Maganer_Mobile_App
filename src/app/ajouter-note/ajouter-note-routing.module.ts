import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterNotePage } from './ajouter-note.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterNotePageRoutingModule {}
