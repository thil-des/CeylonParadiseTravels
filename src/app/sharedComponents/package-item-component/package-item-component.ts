import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryService } from '../../Services/country.service';

@Component({
  selector: 'app-package-item-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './package-item-component.html',
  styleUrl: './package-item-component.css',
})
export class PackageItemComponent {
  @Input() image!: string;
  @Input() days!: string;
  @Input() persons!: string;
  @Input() rating!: number;
  @Input() price!: number;
  @Input() title!: string;
  @Input() routerLink!: string;

  userCountry: string = 'US';
  currencySymbol: string = 'USD';

  constructor(private countryService: CountryService) {}

  async ngOnInit() {
    this.userCountry = await this.countryService.detectCountry();
    if (this.userCountry === 'IT') {
      this.currencySymbol = 'EUR';
    } else {
      this.currencySymbol = 'USD';
    }
  }
}
