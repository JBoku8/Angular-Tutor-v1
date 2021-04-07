import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IArticleState } from './article.reducer';

// Selectors
export const getArticlesStateSelector = createFeatureSelector<IArticleState>(
  'articles'
);

export const getArticlesSelector = createSelector(
  getArticlesStateSelector,
  (state) => state.data
);
