<<<<<<< HEAD
import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  // static RestCountry => Country
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital?.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,

      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(
    restCountries: RESTCountry[]
  ): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
=======
import { Country } from '../interfaces/country.interface';
import { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {

  static mapRestCountryToCountry(item: RESTCountry): Country {

    return {
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.translations['spa'].common ?? 'No Spanish Name',
      capital: item.capital.join(','),
      population: item.population,
    }
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);

  }

  static formap(restCountries: RESTCountry[]): Country[] {

    return restCountries.map(this.mapRestCountryToCountry)
  }


>>>>>>> 7e882a8e7e115f956b1115dad784466cb8e6c741
}
