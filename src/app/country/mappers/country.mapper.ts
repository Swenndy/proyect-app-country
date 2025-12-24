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


}
