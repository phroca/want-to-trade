import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Shoe } from 'src/app/model/shoe';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.page.html',
  styleUrls: ['./shoe-detail.page.scss'],
})
export class ShoeDetailPage implements OnInit {

  @Input() shoe: Shoe;
    // Paramètres optionnelles pour le composant slider

    slideShoesOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    };

    slideSizeOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    };
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
