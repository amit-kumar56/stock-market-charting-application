import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSectorComponent } from './update-sector.component';

describe('UpdateSectorComponent', () => {
  let component: UpdateSectorComponent;
  let fixture: ComponentFixture<UpdateSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
