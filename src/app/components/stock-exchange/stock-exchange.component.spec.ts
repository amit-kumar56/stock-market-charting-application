import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockExchangeComponent } from './stock-exchange.component';

describe('StockExchangeComponent', () => {
  let component: StockExchangeComponent;
  let fixture: ComponentFixture<StockExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
