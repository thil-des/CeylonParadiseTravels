import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemComponent } from './package-item-component';

describe('PackageItemComponent', () => {
  let component: PackageItemComponent;
  let fixture: ComponentFixture<PackageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
