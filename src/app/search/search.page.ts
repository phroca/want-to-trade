import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Shoe } from '../model/shoe';
import { ShoeDetailPage } from './shoe-detail/shoe-detail.page';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit{

  shoe: Shoe;

  constructor(public modalController: ModalController, private routerOutlet: IonRouterOutlet) {
    this.shoe = new Shoe();
  }

  ngOnInit(): void {
    this.shoe.name = 'Nike Air Max 95 OG Neon (2020)';
    this.shoe.price = '120 €';
    this.shoe.size = '7';
    this.shoe.photo = '../../assets/img/nike-air-max-95-og-neon.jpg';
    this.shoe.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
    ' Praesentium veniam illo similique autem obcaecati. Molestiae voluptatem, esse vel' +
    'deleniti sequi, reiciendis harum nesciunt magnam illum vero, minus fugit dolorem exercitationem.';
  }

  async showDetail() {
    const modal = await this.modalController.create({
      component: ShoeDetailPage,
      cssClass: 'shoe-detail-page',
      componentProps: {
        shoe: this.shoe
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
