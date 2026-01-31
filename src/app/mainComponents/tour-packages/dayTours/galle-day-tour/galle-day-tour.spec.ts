import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleDayTour } from './galle-day-tour';

describe('GalleDayTour', () => {
  let component: GalleDayTour;
  let fixture: ComponentFixture<GalleDayTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleDayTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleDayTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
