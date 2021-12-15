import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIpoComponent } from './update-ipo.component';

describe('UpdateIpoComponent', () => {
  let component: UpdateIpoComponent;
  let fixture: ComponentFixture<UpdateIpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
