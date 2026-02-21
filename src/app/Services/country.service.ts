import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CountryService {

  private detectedCountry: string | null = null;
  private countryPromise: Promise<string> | null = null;

  async detectCountry(): Promise<string> {

    if (this.detectedCountry) {
      return this.detectedCountry;
    }

    if (this.countryPromise) {
      return this.countryPromise;
    }
    this.countryPromise = fetch('https://api.country.is/')
      .then(res => res.json())
      .then((data: any) => {
        const country = data?.country || 'US';
        this.detectedCountry = country;
        return country;
      })
      .catch(() => {
        this.detectedCountry = 'US';
        return 'US';
      });

    return this.countryPromise;
  }
}