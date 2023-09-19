import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '../../api/models';
import { Store } from '@ngrx/store';
import { CartState } from '../../cart/+state/cart.reducer';
import { addToCart } from '../../cart/+state/cart.actions';
import { Observable } from 'rxjs';
import { selectIsLoading } from '../../cart/+state/cart.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductDto | undefined
  $isLoading: Observable<boolean>;

  constructor(private cartStore: Store<CartState>, private router: Router) {
    this.$isLoading = this.cartStore.select(selectIsLoading);

  }

  ngOnInit(): void {
  }

  addToCart(product: ProductDto | undefined) {
    if(product) {
      this.cartStore.dispatch(addToCart({
        add: {
          productId: product.id,
          quantity: 1
        }
      }))
    }
  }

  buy(product: ProductDto | undefined) {
    if(product) {
      this.cartStore.dispatch(addToCart({
        add: {
          productId: product.id,
          quantity: 1
        }
      }))
    }
    this.router.navigate(['/cart'])
  }

}
