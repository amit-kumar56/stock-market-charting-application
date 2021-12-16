import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockExchangeComponent } from './update-stock-exchange.component';

describe('UpdateStockExchangeComponent', () => {
  let component: UpdateStockExchangeComponent;
  let fixture: ComponentFixture<UpdateStockExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
