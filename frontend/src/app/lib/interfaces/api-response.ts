export interface IApiResponse<T> {
  code: number;
  exception?: {
    message: string;
    file?: string;
    line?: number;
  };
  data?: T;
}

export interface IApiResponsePagination {
  page: number;
  perPage: number;
  total: number;
}
