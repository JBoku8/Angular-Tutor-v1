export interface IProduct {
  imageUrl: string;
  productName: string;
  productCode: string;
  price: number;
  // addPrice(value: number): number;
}

export class Product implements IProduct {
  imageUrl: string = '';
  productCode: string = '';
  productName: string = '';
  price: number = 0;
  totalProducts: number = 10;

  addPrice(newPrice: number): number {
    return 0;
  }
}
