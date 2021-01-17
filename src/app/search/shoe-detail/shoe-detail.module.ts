import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoeDetailPageRoutingModule } from './shoe-detail-routing.module';

import { ShoeDetailPage } from './shoe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoeDetailPageRoutingModule
  ],
  declarations: [ShoeDetailPage]
})
export class ShoeDetailPageModule {}
