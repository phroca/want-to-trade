import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoeDetailPage } from './shoe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoeDetailPageRoutingModule {}
