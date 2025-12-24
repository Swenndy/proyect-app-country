import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.formap(resp)),
      catchError(error => {
        console.log('Error fetching', error);

        return throwError(() => new Error('No se pudo obtener paises con ese query'))
      })

    );
  }

  searchbyCountry(query: string) {

    query = query.toLowerCase();
    const url = `${API_URL}/name/${query}`;

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((resp) => CountryMapper.formap(resp)),
      catchError(error => {
        console.log('Error fetching', error);

        return throwError(() => new Error('No se pudo obtener paises con ese query'))
      })

    );
  }
}
