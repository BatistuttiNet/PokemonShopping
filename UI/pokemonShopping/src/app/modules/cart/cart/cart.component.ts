import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../+state/cart.reducer';
import { selectProductsInCart, selectQuantity, selectTotal } from '../+state/cart.selector';
import { ProductInCartDto } from '../../api/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  $quantity: Observable<number>;
  $total: Observable<number>;
  $productsInCart: Observable<ProductInCartDto[]>;

  constructor(private cartStore: Store<CartState>) {
    this.$quantity = this.cartStore.select(selectQuantity);
    this.$total = this.cartStore.select(selectTotal);
    this.$productsInCart = this.cartStore.select(selectProductsInCart);
  }

  ngOnInit(): void {
  }

}
