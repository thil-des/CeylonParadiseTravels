import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CountryService {
  async detectCountry(): Promise<string> {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      return data.country || 'US';
    } catch {
      return 'US';
    }
  }
}
