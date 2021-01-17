import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoeDetailPage } from './shoe-detail.page';

describe('ShoeDetailPage', () => {
  let component: ShoeDetailPage;
  let fixture: ComponentFixture<ShoeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
