import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFiltersDialogComponent } from '../product-filters-dialog/product-filters-dialog.component';
import { Store } from '@ngrx/store';
import { ProductsState } from '../+state/products.reducer';
import { loadProducts } from '../+state/products.actions';
import { Observable } from 'rxjs';
import { ProductDto } from '../../api/models';
import { selectIsLoading, selectProducts } from '../+state/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showFilters = false;
  isMobile = window.innerWidth < 768;

  $isLoading: Observable<boolean>;
  $products: Observable<ProductDto[]>;

  constructor(private dialog: MatDialog, private store:Store<ProductsState>) {

    window.onresize = () => {
      this.isMobile = window.innerWidth < 768;
    };

    this.store.dispatch(loadProducts({ filter: {}}))

    this.$isLoading = this.store.select(selectIsLoading);
    this.$products = this.store.select(selectProducts);
  }

  ngOnInit(): void {
  }

  openFilters() {
    const dialogRef = this.dialog.open(ProductFiltersDialogComponent, {
      width: '300px',
    });


  }

}
