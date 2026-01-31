import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandyDayTourComponent } from './kandy-day-tour-component';

describe('KandyDayTourComponent', () => {
  let component: KandyDayTourComponent;
  let fixture: ComponentFixture<KandyDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KandyDayTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandyDayTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
