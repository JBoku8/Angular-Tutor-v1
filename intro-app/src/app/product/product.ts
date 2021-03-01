export interface IProduct {
  imageUrl: string;
  productName: string;
  productCode: string;
  price: number;
  rating: number;
  // addPrice(value: number): number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Product implements IProduct {
  imageUrl: string = '';
  productCode: string = '';
  productName: string = '';
  price: number = 0;
  rating: number = 0;
  totalProducts: number = 10;

  addPrice(newPrice: number): number {
    return 0;
  }
}
