import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../cart/+state/cart.reducer';
import { Observable } from 'rxjs';
import { selectQuantity } from '../../cart/+state/cart.selector';
import { AuthState } from '../../+state/auth.reducer';
import { logout } from '../../+state/auth.actions';
import { selectIsAdmin, selectUserInitials, selectUserName } from '../../+state/auth.selector';

@Component({
  selector: 'app-private-layaout',
  templateUrl: './private-layaout.component.html',
  styleUrls: ['./private-layaout.component.scss']
})
export class PrivateLayaoutComponent implements OnInit {

  $quantity: Observable<number>;
  $isAdmin: Observable<boolean>;
  $initials: Observable<string>;

  constructor(private cartStore: Store<CartState>, private authStore: Store<AuthState>) {
    this.$quantity = this.cartStore.select(selectQuantity);
    this.$isAdmin = this.authStore.select(selectIsAdmin);
    this.$initials = this.authStore.select(selectUserInitials);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authStore.dispatch(logout());
  }

}
