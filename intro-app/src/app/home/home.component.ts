import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILanguage } from '../ngrx/state/language.interface';

import { reset, increment, decrement } from './state/counter.actions';
import { ICounter } from './state/counter.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counter$: Observable<ICounter>;
  lang$: Observable<ILanguage>;
  translate = {
    KA: {
      title: 'მთვლელი',
    },
    EN: {
      title: 'Counter',
    },
    FR: {
      title: 'Compteur',
    },
  };
  translated = {
    title: 'მთვლელი',
  };
  constructor(private store: Store<any>) {
    this.counter$ = this.store.select('counter');
    this.lang$ = this.store.select('app');
  }

  ngOnInit(): void {
    this.counter$.subscribe((counter: ICounter) => {
      console.log('[Home@counter]', counter);
    });

    this.lang$.subscribe((lang) => {
      // @ts-ignore
      this.translated = this.translate[lang.activeLang];
    });
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
}
