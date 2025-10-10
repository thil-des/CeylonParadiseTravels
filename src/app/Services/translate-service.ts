import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private url = 'https://libretranslate.com/translate';

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLang: string): Observable<any> {
    const body = {
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text',
      api_key: '' 
    };
    return this.http.post(this.url, body);
  }
}
