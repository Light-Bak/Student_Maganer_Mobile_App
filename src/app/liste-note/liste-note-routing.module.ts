import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeNotePage } from './liste-note.page';

const routes: Routes = [
  {
    path: '',
    component: ListeNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeNotePageRoutingModule {}
