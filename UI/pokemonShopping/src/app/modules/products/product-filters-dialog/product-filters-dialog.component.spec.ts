import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltersDialogComponent } from './product-filters-dialog.component';

describe('ProductFiltersDialogComponent', () => {
  let component: ProductFiltersDialogComponent;
  let fixture: ComponentFixture<ProductFiltersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiltersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
