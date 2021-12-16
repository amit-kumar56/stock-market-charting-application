import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockPriceComponent } from './create-stock-price.component';

describe('CreateStockPriceComponent', () => {
  let component: CreateStockPriceComponent;
  let fixture: ComponentFixture<CreateStockPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStockPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
