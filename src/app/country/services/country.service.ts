import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
<<<<<<< HEAD

import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';
=======
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private regionCache = new Map<string, Country[]>();
=======
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

<<<<<<< HEAD
    if (this.queryCacheCapital.has(query)) return of(this.queryCacheCapital.get(query) ?? []);

    console.log(`LLegando al servidor por ${query}`);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap(countries => this.queryCacheCapital.set(query, countries)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener países con ese query ${query}`)
        );
      })
    );
  }

  searchByCountry(query: string) {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase();

    if (this.queryCacheCountry.has(query)) return of(this.queryCacheCountry.get(query) ?? []);

    console.log(`Llegando al servidor por ${query}`);

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener países con ese query ${query}`)
        );
      })
    );
  }

  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener países con ese código ${code}`)
        );
      })
    );
  }
  searchByRegion(region: string): Observable<Country[]> {
    const url = `${API_URL}/region/${region}`;

    if (this.regionCache.has(region)) return of(this.regionCache.get(region) ?? []);

    console.log(`LLegando al servidor por ${region}`);
    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.regionCache.set(region, countries)),
    )

  }
=======
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
>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741
}
