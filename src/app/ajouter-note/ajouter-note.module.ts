import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterNotePageRoutingModule } from './ajouter-note-routing.module';

import { AjouterNotePage } from './ajouter-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterNotePageRoutingModule
  ],
  declarations: [AjouterNotePage]
})
export class AjouterNotePageModule {}
