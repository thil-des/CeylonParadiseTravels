import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import toursData from '../../databaseJson/tours.json';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule,PackageItemComponent],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css'
})
export class TourPackages {
  dayTours: any[] = [];
  multiDayTours: any[] = [];

  activeTab: 'multi' | 'day' = 'multi';

  ngOnInit() {
    this.dayTours = toursData.dayTours;
    this.multiDayTours = toursData.multiDayTours;
  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }
}
