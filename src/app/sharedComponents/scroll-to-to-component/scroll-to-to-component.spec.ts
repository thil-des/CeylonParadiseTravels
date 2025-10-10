import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToToComponent } from './scroll-to-to-component';

describe('ScrollToToComponent', () => {
  let component: ScrollToToComponent;
  let fixture: ComponentFixture<ScrollToToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
