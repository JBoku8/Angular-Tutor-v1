import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/products/shared/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() product?: IProduct;
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
