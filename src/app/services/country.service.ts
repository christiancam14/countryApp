import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountryAPIResponse } from '../config/interfaces/api.response';
import { Country } from '../config/interfaces/country';
import { mapApiResponseToCountry } from '../config/mapper/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) {}

  getCountryInfo(country: string): Observable<Country> {
    return this.http.get<CountryAPIResponse[]>(`${this.apiUrl}${country}`).pipe(
      map((apiResponse) => {
        // Aquí aplicamos el mapper para convertir CountryAPIResponse en Country
        return mapApiResponseToCountry(apiResponse);
      })
    );
  }
}
