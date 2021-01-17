import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
  },
  {
    path: 'shoe-detail',
    loadChildren: () => import('./shoe-detail/shoe-detail.module').then( m => m.ShoeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}
