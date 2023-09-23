import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../api/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartDto } from '../../api/models';

@Component({
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.scss']
})
export class CartHistoryComponent implements OnInit {

  $histoyList!: Observable<ShoppingCartDto[]>;


  constructor(private apiservice: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.$histoyList = this.apiservice.purchaseHistory$Json().pipe(map(x => x.payload ?? []));
  }

}
