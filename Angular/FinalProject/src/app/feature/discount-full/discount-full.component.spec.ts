import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFullComponent } from './discount-full.component';

describe('DiscountFullComponent', () => {
  let component: DiscountFullComponent;
  let fixture: ComponentFixture<DiscountFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
