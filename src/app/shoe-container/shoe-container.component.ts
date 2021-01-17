import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from '../model/shoe';

@Component({
  selector: 'app-shoe-container',
  templateUrl: './shoe-container.component.html',
  styleUrls: ['./shoe-container.component.scss'],
})
export class ShoeContainerComponent implements OnInit {
  @Input() shoe: Shoe;

  constructor() { }

  ngOnInit() {}

}
