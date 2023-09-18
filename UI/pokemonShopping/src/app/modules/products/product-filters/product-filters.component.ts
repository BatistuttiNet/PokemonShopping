import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {

  typesOfPokemon: string[] = ['Agua', 'Fuego', 'Electrico'];
  precios: string[] = ['> 10', '10 - 50', '50 - 100', '<100'];

  constructor() { }

  ngOnInit(): void {
  }

}
