import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  updateRating(newValue: number) {
    this.rating = newValue;
    this.onChange.emit(this.rating);
  }
}
