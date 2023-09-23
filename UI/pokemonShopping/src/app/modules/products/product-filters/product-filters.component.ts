import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { ProductsState } from '../+state/products.reducer';
import { Store } from '@ngrx/store';
import { loadProducts } from '../+state/products.actions';
import { Form, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { selectProductsName } from '../+state/products.selector';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit, OnDestroy {

  pokemonControl: FormControl;
  $names: Observable<string[]>;
  pokemonControlSubscription: Subscription;

  categories: string[] = ['Neo', 'Base set'];
  prices: string[] = ['>= 10', '10 - 50', '50 - 100', '>= 100'];
  selectedprice: { from: number | null, to: number | null } | null;
  selectedCategory: string | null;

  constructor( private store:Store<ProductsState>) {

    this.selectedprice = null;
    this.selectedCategory = null;
    this.pokemonControl = new FormControl(null);
    this.$names = this.store.select(selectProductsName);
    this.pokemonControlSubscription = this.pokemonControl.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(x => {
      this.dispatchFilter();
    })
  }

  ngOnDestroy(): void {
    this.pokemonControlSubscription?.unsubscribe();
  }


  ngOnInit(): void {
  }

  onSelectionChange(list: any, name: string,  event: MatSelectionListChange ) {

    switch(name) {
      case 'prices':
        this.selectedprice = null;
        break;
      case 'categories':
          this.selectedCategory = null;
        break;
    }

    for (const option of list.options) {
      if (option !== event.option) {
        option.selected = false;
      } else if (option.selected) {
        switch(name) {
          case 'prices':
            this.selectedprice = this.getRange(option.value);
            break;
          case 'categories':
              this.selectedCategory = option.value;
            break;
        }
      }
    }

    this.dispatchFilter();
  }

  private dispatchFilter() {
    this.store.dispatch(loadProducts({
      filter: {
        Name: this.pokemonControl.value ?? null,
        Category: this.selectedCategory,
        PriceFrom: this.selectedprice?.from ?? null,
        PriceTo: this.selectedprice?.to ?? null,
      }
    }));
  }

  getRange(price: string): { from: number | null, to: number | null } {
    switch (price) {
        case '>= 10':
            return { from: 10, to: null };
        case '10 - 50':
            return { from: 10, to: 50 };
        case '50 - 100':
            return { from: 50, to: 100 };
        case '>= 100':
            return { from: 100, to: null };
        default:
            throw new Error('Range not recognized');
    }
  }


}
