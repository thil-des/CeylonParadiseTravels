import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllaDayTourComponent } from './ella-day-tour-component';

describe('EllaDayTourComponent', () => {
  let component: EllaDayTourComponent;
  let fixture: ComponentFixture<EllaDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllaDayTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllaDayTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
