import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, ITodo } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getProducts(): IProduct[] {
    return [
      {
        imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40.jpg',
        productName: 'Xiaomi Redmi',
        productCode: 'K-40',
        price: 280.2489,
        rating: 5,
      },
      {
        imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m02.jpg',
        productName: 'Samsung Galaxy',
        productCode: 'M-02',
        price: 6.999,
        rating: 4,
      },
      {
        imageUrl:
          'https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-e7-power.jpg',
        productName: 'Motorola Moto',
        productCode: 'E7-Power',
        price: 90.895,
        rating: 3,
      },
    ];
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this._baseURL}/todos?_start=0&_limit=10`);
  }
}
