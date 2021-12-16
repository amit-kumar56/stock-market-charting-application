import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockPriceComponent } from './update-stock-price.component';

describe('UpdateStockPriceComponent', () => {
  let component: UpdateStockPriceComponent;
  let fixture: ComponentFixture<UpdateStockPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
