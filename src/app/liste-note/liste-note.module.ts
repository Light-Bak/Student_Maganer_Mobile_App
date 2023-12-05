import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeNotePageRoutingModule } from './liste-note-routing.module';

import { ListeNotePage } from './liste-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeNotePageRoutingModule
  ],
  declarations: [ListeNotePage]
})
export class ListeNotePageModule {}
