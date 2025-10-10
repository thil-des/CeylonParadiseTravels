import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPackages } from './tour-packages';

describe('TourPackages', () => {
  let component: TourPackages;
  let fixture: ComponentFixture<TourPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
