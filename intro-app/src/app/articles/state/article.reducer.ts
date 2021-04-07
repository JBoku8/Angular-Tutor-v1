import { createReducer, on } from '@ngrx/store';
import { IArticle } from '../shared/article';
import {
  createArticleAction,
  getArticlesAction,
  setArticlesAction,
} from './article.actions';

export interface IArticleState {
  data: IArticle[];
  loading: boolean;
  article: IArticle | null;
}

const InitialState: IArticleState = {
  data: [],
  article: null,
  loading: false,
};

// reducer
export const articleReducer = createReducer(
  InitialState,
  on(
    createArticleAction,
    (state, action): IArticleState => {
      return {
        ...state,
        article: action.article,
      };
    }
  ),
  on(
    getArticlesAction,
    (state, action): IArticleState => {
      return {
        ...state,
        data: action.articles,
      };
    }
  ),
  on(
    setArticlesAction,
    (state, action): IArticleState => {
      return {
        ...state,
        data: action.articles,
      };
    }
  )
);
