import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import toursData from '../../databaseJson/tours.json';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../Services/country.service';

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
  userCountry = 'US';

  activeTab: 'multi' | 'day' = 'multi';

  constructor(
    private http: HttpClient,
    private countryService: CountryService
  ) {}

  async ngOnInit() {
    this.userCountry = await this.countryService.detectCountry();
    this.dayTours = await this.loadToursWithPrices(toursData.dayTours);
    this.multiDayTours = await this.loadToursWithPrices(toursData.multiDayTours);
  }

  async loadToursWithPrices(tours: any[]) {
    return Promise.all(
      tours.map(async (tour) => {
        const price = await this.loadPrice(tour.filecode);
        return { ...tour, price };
      })
    );
  }

  loadPrice(filecode: string): Promise<number> {
    const countryFile = `/assets/data/${this.userCountry}${filecode}.json`;
    const defaultFile = `/assets/data/US${filecode}.json`;

    return new Promise((resolve) => {
      this.http.get(countryFile).subscribe({
        next: (data: any) => {
          if (data && data.price && data.price[1] != null) {
            resolve(data.price[1]);
          } else {
            this.loadDefaultPrice(defaultFile, resolve);
          }
        },
        error: () => {
          this.loadDefaultPrice(defaultFile, resolve);
        },
      });
    });
  }

  private loadDefaultPrice(file: string, resolve: (v: number) => void) {
    this.http.get(file).subscribe({
      next: (data: any) => {
        if (data && data.price && data.price[1] != null) {
          resolve(data.price[1]);
        } else {
          console.error('Invalid default price file:', file);
          resolve(0);
        }
      },
      error: () => {
        console.error('Default price file missing:', file);
        resolve(0);
      },
    });
  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }
}
