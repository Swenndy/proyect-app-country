import { ChangeDetectionStrategy, Component, computed, inject, input, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),

    loader: async ({ request }) => {
      console.log('📢 LOADER RECIBIÓ:', request.query);
      if (!request.query) return [];


      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    }
  });
}

  // title = 'titulo prueba';

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);
  // number = computed(() => {
  //   console.log(this.countries());
  //   return this.countries().length;
  // });

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //     .subscribe({
  //       next: (countries) => {
  //         this.isLoading.set(false);
  //         this.countries.set(countries);
  //       },
  //       error: (err) => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.isError.set(`No se encontro un pais con esa capital: ${query}`);
  //       },
  //     })
  // }
}
