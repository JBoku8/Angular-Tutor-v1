import { createAction, props } from '@ngrx/store';
import { IArticle } from '../shared/article';

export const createArticleAction = createAction(
  '[Article Create Article]',
  props<{ article: IArticle }>()
);

export const getArticlesAction = createAction(
  '[Article Get Articles]',
  props<{ articles: IArticle[] }>()
);

export const setArticlesAction = createAction(
  '[Article Set Article]',
  props<{ articles: IArticle[] }>()
);
