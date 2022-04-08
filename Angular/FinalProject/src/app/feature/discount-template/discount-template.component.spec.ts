import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTemplateComponent } from './discount-template.component';

describe('DiscountTemplateComponent', () => {
  let component: DiscountTemplateComponent;
  let fixture: ComponentFixture<DiscountTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
