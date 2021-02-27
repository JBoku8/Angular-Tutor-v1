import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductList implements OnInit {
  private _filterValue: string = '';

  showImages: boolean = false;
  imageHeight: number = 100;
  filteredProducts: IProduct[] = [];
  productList: IProduct[] = [
    {
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40.jpg',
      productName: 'Xiaomi Redmi',
      productCode: 'K-40',
      price: 280.2489,
    },
    {
      imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m02.jpg',
      productName: 'Samsung Galaxy',
      productCode: 'M-02',
      price: 6.999,
    },
    {
      imageUrl:
        'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e7-power.jpg',
      productName: 'Motorola Moto',
      productCode: 'E7-Power',
      price: 90.895,
    },
  ];

  constructor() {
    this.filterValue = 'Moto';
  }

  ngOnInit(): void {}

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
}
