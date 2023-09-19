import { Component, Input, OnInit } from '@angular/core';
import { CartState } from '../+state/cart.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductInCartDto } from '../../api/models';
import { selectIsLoading } from '../+state/cart.selector';
import { addToCart } from '../+state/cart.actions';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input() product: ProductInCartDto | undefined
  $isLoading: Observable<boolean>;


  constructor(private cartStore: Store<CartState>) {

    this.$isLoading = this.cartStore.select(selectIsLoading);
   }

  ngOnInit(): void {
  }

  addToCart(product: ProductInCartDto | undefined) {
    if(product) {
      this.cartStore.dispatch(addToCart({
        add: {
          productId: product.product?.id,
          quantity: -1
        }
      }))
    }
  }

}
