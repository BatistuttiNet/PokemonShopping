import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductRoutingModule } from './produts-routing.module';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { SharedModule } from '../shared/shared.module';
import { ProductFiltersDialogComponent } from './product-filters-dialog/product-filters-dialog.component';
import { ProductCardSkeletonComponent } from './product-card-skeleton/product-card-skeleton.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './+state/products.effects';
import { ProductsReducer, productsReducerfeatureKey } from './+state/products.reducer';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductFiltersComponent,
    ProductFiltersDialogComponent,
    ProductCardSkeletonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature(productsReducerfeatureKey, ProductsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [
    ProductCardComponent,
  ]
})
export class ProductsModule { }
