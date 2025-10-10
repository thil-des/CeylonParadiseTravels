import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDaysTourComponent } from './five-days-tour-component';

describe('FiveDaysTourComponent', () => {
  let component: FiveDaysTourComponent;
  let fixture: ComponentFixture<FiveDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveDaysTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveDaysTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
