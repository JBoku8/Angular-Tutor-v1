import { ICounter } from '../home/state/counter.interface';
import { ILanguage } from './state/language.interface';

export interface AppState {
  counter: ICounter;
  app: ILanguage;
}
