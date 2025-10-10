import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDaysTourComponent } from './seven-days-tour-component';

describe('SevenDaysTourComponent', () => {
  let component: SevenDaysTourComponent;
  let fixture: ComponentFixture<SevenDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenDaysTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenDaysTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
