import { MessageAlertService } from './message-alert.service';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { IApiResponse } from '../lib/interfaces/api-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiServer = `${environment.apiUrl}`;
  private appId = `${environment.appKey}`;

  constructor(
    private http: HttpClient,
    private messageAlertService: MessageAlertService
  ) {}

  /**
   * Função genérica, para routas públicas
   *
   * @param path url da rotas
   * @param data parametros
   * @returns Resposta estruturada em estado Observable
   */
  post<T>(path = '', data = {}): Observable<IApiResponse<T>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'App-Uuid': `${this.appId}`,
    });

    const url = `${this.apiServer}${path}`;
    return this.http.post<IApiResponse<T>>(url, data, { headers }).pipe(
      catchError(error => {
        const errorResponse: IApiResponse<T> = {
          code: error.status, // Captura 405, 404, etc.
          exception: {
            message: error.error.exception?.message || 'Erro desconhecido',
            file: error.error.exception?.file || null,
            line: error.error.exception?.line || null,
          },
          data: undefined,
        };
        if (error.status === 0) {
          errorResponse.data = undefined;
          errorResponse.exception = undefined;
          this.messageAlertService.setMessageAlert({
            code: 500,
            message: {
              title: 'Erro De Ligação!',
              message:
                'Erro grave a contactar o servidor. Parece estar indisponível, pode ser manutenção, mas se persistir contacte o administrador.',
            },
          });
        }
        return of(errorResponse);
      }),
      map(response => {
        if (response.code !== 200) {
          if (response.code === 404) {
            this.messageAlertService.setMessageAlert({
              code: 404,
              message: {
                title: path,
                message: 'A página que procura não foi encontrada.',
              },
            });
          }
          if (response.code === 405) {
            this.messageAlertService.setMessageAlert({
              code: 500,
              message: {
                title: 'Método Não Permitido',
                message: `O método POST não é permitido para ${path}.`,
              },
            });
          }
          if (response.code === 500) {
            this.messageAlertService.setMessageAlert({
              code: 500,
              exception: response.exception,
            });
          }
        }
        return response;
      }),
      shareReplay()
    );
  }

  /**
   * Função genérica, para routas públicas
   *
   * @param path url da rotas
   * @param data parametros
   * @returns Resposta estruturada em estado Observable
   */
  get<T>(path = '', params = {}): Observable<IApiResponse<T>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'App-Uuid': `${this.appId}`,
    });

    const url = `${this.apiServer}${path}`;
    return this.http.get<IApiResponse<T>>(url, { headers, params }).pipe(
      catchError(error => {
        // Transforma erros HTTP (ex.: 404) numa resposta IApiResponse
        const errorResponse: IApiResponse<T> = {
          code: error.status, // 404, 500, etc.
          exception: {
            message: error.error.exception?.message || 'Erro desconhecido',
            file: error.error.exception?.file || null,
            line: error.error.exception?.line || null,
          },
          data: undefined,
        };
        console.log('O que segue para o map =>', errorResponse); // Debug
        if (error.status === 0) {
          errorResponse.data = undefined;
          errorResponse.exception = undefined;
          this.messageAlertService.setMessageAlert({
            code: 500,
            message: {
              title: 'Erro De Ligação!',
              message:
                'Erro grave a contactar o servidor. Parece estar indisponível, pode ser manutenção, mas se persistir contacte o administrador.',
            },
          });
        }
        return of(errorResponse);
      }),
      map(response => {
        console.log('Server Response =>', response); // Debug
        if (response.code !== 200) {
          if (response.code === 404) {
            this.messageAlertService.setMessageAlert({
              code: 404,
              message: {
                title: path,
                message:
                  'Não foi encontrada referência ao seu pedido. Se o problema persistir, reporte a página.',
              },
            });
          }
          if (response.code === 500) {
            this.messageAlertService.setMessageAlert({
              code: 500,
              exception: response.exception,
            });
          }
        }
        return response; // Sempre devolve IApiResponse<T>
      }),
      shareReplay()
    );
  }
}
