import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritePage } from './favorite.page';

import { FavoritePageRoutingModule } from './favorite-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FavoritePage }]),
    FavoritePageRoutingModule,
  ],
  declarations: [FavoritePage]
})
export class FavoritePageModule {}
