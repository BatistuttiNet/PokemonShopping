import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../cart/+state/cart.reducer';
import { Observable } from 'rxjs';
import { selectQuantity } from '../../cart/+state/cart.selector';

@Component({
  selector: 'app-private-layaout',
  templateUrl: './private-layaout.component.html',
  styleUrls: ['./private-layaout.component.scss']
})
export class PrivateLayaoutComponent implements OnInit {

  $quantity: Observable<number>;

  constructor(private cartStore: Store<CartState>) {
    this.$quantity = this.cartStore.select(selectQuantity);
  }



  ngOnInit(): void {
  }

}
