import { IApiResponsePagination } from './api-response';

export interface ICidadao {
  uuid: string;
  nome: string;
  nome_completo?: string;
  data_nascimento?: Date;
  data_falecimento?: Date;
  genero?: string;
  freguesia_id?: number;
  nacional: boolean;
  sinopse: string;
}

export interface ICidadaosResponse {
  cidadaos: ICidadao[];
  pagination?: IApiResponsePagination;
}
