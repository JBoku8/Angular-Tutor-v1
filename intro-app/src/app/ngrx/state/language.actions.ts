import { createAction, props } from '@ngrx/store';

export const changeLanguage = createAction(
  '[App Component] ChangeLanguage',
  props<{ newLang: string }>()
);
