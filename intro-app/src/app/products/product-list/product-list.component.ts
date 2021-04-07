import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { setProductsAction, editProductAction } from '../state/product.actions';
import {
  getProductsSelector,
  getProductsFeatureSelector,
} from '../state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _filterValue: string = '';
  showImages: boolean = false;
  imageHeight: number = 100;
  filteredProducts: IProduct[] = [];
  productList: IProduct[] = [];

  constructor(private _productService: ProductService, private _store: Store) {
    // set class default values
    this._store.dispatch(
      setProductsAction({ data: this._productService.getProducts() })
    );
  }

  ngOnInit(): void {
    // ajax calls
    // this.productList = this._productService.getProducts();

    this._store.select(getProductsSelector).subscribe((result) => {
      this.productList = result;
    });

    this.filterValue = '';
  }

  // მხოლოდ get ნიშნავს read-only თვისებას
  get filterValue(): string {
    return this._filterValue;
  }
  // მხოლოდ set ნიშნავს write-only თვისებას
  set filterValue(value: string) {
    this._filterValue = value;
    if (this._filterValue) {
      this.filteredProducts = this.productList.filter((p) => {
        return p.productName
          .toLowerCase()
          .includes(this._filterValue.toLowerCase());
      });
    } else {
      this.filteredProducts = this.productList.slice();
    }
  }

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  onRatingChange(message: number): void {
    console.log(message);
  }

  onProductEdit(selectedProduct: IProduct): void {
    this._store.dispatch(editProductAction({ product: selectedProduct }));
  }

  ngOnDestroy(): void {}
}

// Singleton Design pattern
