import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeContactPage } from './make-contact.page';

const routes: Routes = [
  {
    path: '',
    component: MakeContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeContactPageRoutingModule {}
