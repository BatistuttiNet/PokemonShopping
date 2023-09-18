import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFiltersDialogComponent } from '../product-filters-dialog/product-filters-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showFilters = false;
  isMobile = window.innerWidth < 768;

  constructor(private dialog: MatDialog) {

    window.onresize = () => {
      this.isMobile = window.innerWidth < 768;
    };
  }

  ngOnInit(): void {
  }

  openFilters() {
    const dialogRef = this.dialog.open(ProductFiltersDialogComponent, {
      width: '300px',
    });


  }

}
