import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/products/shared/product';
import { getCurrentProductSelector } from 'src/app/products/state/product.selectors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  product?: IProduct | null;
  constructor(private _store: Store) {}

  ngOnInit(): void {
    if (this.isEditing) {
      this._store.select(getCurrentProductSelector).subscribe((product) => {
        this.product = product;
      });
    }
  }
}
