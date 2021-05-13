import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeContactPageRoutingModule } from './make-contact-routing.module';

import { MakeContactPage } from './make-contact.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeContactPageRoutingModule
  ],
  declarations: [MakeContactPage]
})
export class MakeContactPageModule {}
