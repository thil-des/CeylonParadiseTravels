import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigiriyaDayTourComponent } from './sigiriya-day-tour-component';

describe('SigiriyaDayTourComponent', () => {
  let component: SigiriyaDayTourComponent;
  let fixture: ComponentFixture<SigiriyaDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigiriyaDayTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigiriyaDayTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
