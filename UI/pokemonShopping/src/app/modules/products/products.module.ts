import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductRoutingModule } from './produts-routing.module';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { SharedModule } from '../shared/shared.module';
import { ProductFiltersDialogComponent } from './product-filters-dialog/product-filters-dialog.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductFiltersComponent,
    ProductFiltersDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
