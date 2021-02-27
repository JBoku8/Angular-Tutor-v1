import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductList implements OnInit {
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

  ngOnInit(): void {}
}
