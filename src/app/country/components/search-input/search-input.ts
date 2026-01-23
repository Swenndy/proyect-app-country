import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  placeholder = input('Buscar');
  salida = output<string>();
  onEmitValueSearch(value: string) {
    const term = value.trim();
    if (term.length === 0) {
      console.log('esta vacio');
      return;
    }
    this.salida.emit(term);
  }
}
