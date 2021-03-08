export interface FilterForm {
  q?: string;
  sources?: string;
  from?: string;
  to?: string;
  sortBy?: SortBy;
  qInTitle: string;
  pageSize: number;
  page: number;
}

export enum SortBy {
  relevancy,
  popularity,
  publishedAt,
}
