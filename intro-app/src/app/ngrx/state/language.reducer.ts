import { createReducer, on } from '@ngrx/store';

import { changeLanguage } from './language.actions';

import { ILanguage, Languages } from './language.interface';

export const initialState = {
  activeLang: 'KA',
};

const _reducer = createReducer(
  initialState,
  on(changeLanguage, (state, props) => {
    return {
      ...state,
      activeLang: props.newLang,
    };
  })
);

export const languageReducer = (state: any, action: any) =>
  _reducer(state, action);
