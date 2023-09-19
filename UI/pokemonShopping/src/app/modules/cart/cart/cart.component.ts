import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../+state/cart.reducer';
import { selectProductsInCart, selectQuantity, selectTotal } from '../+state/cart.selector';
import { ProductInCartDto } from '../../api/models';
import { ShoppingCartService } from '../../api/services';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { loadCart } from '../+state/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  private stripe: any;
  private elements: any;
  private cardElement: any;

  $quantity: Observable<number>;
  $total: Observable<number>;
  $productsInCart: Observable<ProductInCartDto[]>;
  paying: boolean

  constructor(private cartStore: Store<CartState>, private service: ShoppingCartService, private router: Router) {
    this.$quantity = this.cartStore.select(selectQuantity);
    this.$total = this.cartStore.select(selectTotal);
    this.$productsInCart = this.cartStore.select(selectProductsInCart);
    this.paying = false
  }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51Ns8sKI6MN1a9sO1OuuvhnprVgJakBNyS3yRElsnQ70wY3qgo841fJPqedvqx2H1rQWoCbdwoOYx80ZdgyZ57E2W00KQLfHSU3');
    this.elements = this.stripe.elements();
    this.cardElement = this.elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async handlePayment(event: Event) {
    event.preventDefault();

    this.paying = true;

    const { token, error } = await this.stripe.createToken(this.cardElement);

    if (error) {
      this.paying = false;
      console.error(error);
    } else {
      this.sendTokenToServer(token);
    }
  }

  sendTokenToServer(token: any) {
    this.service.purchase$Json({
      body: {
        token: token.id
      }
    }).subscribe(x => {
      this.paying = false
      alert("Pago procesado")
      this.cartStore.dispatch(loadCart())
      this.router.navigate(['/buy/products'])
    }, error => this.paying = false);
  }

}


