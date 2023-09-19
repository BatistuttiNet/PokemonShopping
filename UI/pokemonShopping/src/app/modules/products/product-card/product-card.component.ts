import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '../../api/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductDto | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
