import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPacksComponent } from './promo-packs.component';

describe('PromoPacksComponent', () => {
  let component: PromoPacksComponent;
  let fixture: ComponentFixture<PromoPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
