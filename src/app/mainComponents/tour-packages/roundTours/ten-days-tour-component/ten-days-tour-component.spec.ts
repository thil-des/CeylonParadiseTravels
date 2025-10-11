import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDaysTourComponent } from './ten-days-tour-component';

describe('TenDaysTourComponent', () => {
  let component: TenDaysTourComponent;
  let fixture: ComponentFixture<TenDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenDaysTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenDaysTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
