import { ApiService } from './../../../services/api-service.service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';
import { Subject } from 'rxjs';
import {
  EInputType,
  EPosition,
  IButton,
  IInput,
  ISpinner,
  ITable,
  MetronicInputComponent,
  MetronicTableComponent,
} from '@carlosliberjesus/lib-metronic';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IApiResponsePagination } from '../../../lib/interfaces/api-response';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ICidadaosResponse } from '../../../lib/interfaces/cidadao-responses';

export interface IHomepage {
  version: string;
}

@Component({
  selector: 'app-cidadaos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MetronicInputComponent,
    MetronicTableComponent,
  ],
  templateUrl: './cidadaos.component.html',
  styleUrl: './cidadaos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageCidadaosComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('tableTools', { read: TemplateRef })
  tableTools!: TemplateRef<HTMLElement>;
  @ViewChild('rowTemplate', { read: TemplateRef })
  rowTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('cardTemplate', { read: TemplateRef })
  cardTemplate!: TemplateRef<HTMLElement>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  search: FormControl = new FormControl('');
  searchInput: IInput = {
    name: 'search-user',
    type: EInputType.TEXT,
    placeholder: 'Pesquisar',
    cssInputContainer: ['ms-3', 'ms-lg-6', 'position-relative'],
    icon: {
      icon: {
        library: 'bi',
        value: 'bi-search',
        css: ['fs-3'],
      },
      position: EPosition.LEFT,
    },
  };

  loading: ISpinner = {
    name: 'table-loading',
    cssContainer: ['my-5', 'fs-4'],
    placeholder: {
      text: 'Recolhendo informações',
    },
    animation: {
      text: '...',
      css: [
        'animate__animated animate__lightSpeedInLeft animate__normal animate__infinite',
      ],
    },
  };

  detailsButton: IButton = {
    css: [
      'btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-ancap w-35px h-35px w-md-40px h-md-40px',
    ],
    iconFirst: {
      library: 'bi',
      value: 'bi-eye',
      css: ['fs-2'],
    },
  };

  table!: ITable;

  constructor(
    private pageTitleService: PageTitleService,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Cidadãos',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Cidadãos' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Cidadãos',
        description: 'Cidadãos incluídos BeWhyOrg',
        image: 'https://bewhy.org/img/logos/ico-dark-white.png',
        url: 'https://bewhy.org/cidadaos',
      },
    });
  }

  ngAfterViewInit(): void {
    this.table = {
      card: {
        css: ['p-5'],
        header: {
          titleCss: ['fw-bold mb-1'],
          smallCss: ['fs-6 text-gray-500'],
          toolbar: ['my-1'],
        },
        body: ['pt-0'],
      },
      title: 'Cidadãos',
      loading: this.loading,
      notFound: 'Não foram encontrados dados',
      toolbar: this.tableTools,
      css: [
        'table',
        'table-switch',
        'table-row-bordered table-row-dashed gy-4 align-middle fw-bold no-footer',
      ],
      tableHeaders: {
        css: ['fs-7 text-gray-500 text-uppercase'],
        columns: [{ name: 'Nome' }, { name: 'Datas' }, { name: 'Ações' }],
      },
      rowTemplate: null,
      cardTemplate: this.cardTemplate,
    };

    this.cdr.detectChanges();
    this.getCidadaosList();
  }

  getCidadaosList(_data = {}): void {
    this.apiService.get<IHomepage>('/homepage').subscribe(response => {
      console.log('response final: ', response.code, response.data);
    });
    this.apiService
      .get<ICidadaosResponse>('/cidadaos', _data)
      .subscribe(response => {
        console.log('response final: ', response.code, response.data);
        if (response.code === 200 && response.data) {
          this.table = {
            ...this.table,
            tableData: response.data.cidadaos,
            pagination: response.data.pagination,
            rowTemplate: this.rowTemplate,
            cardTemplate: this.cardTemplate,
          };
          this.cdr.detectChanges();
        }
      });
  }

  onSearch(_entered: boolean): void {
    const pagination = this.table.pagination ?? null;
    this.table.tableData = null;

    this.getCidadaosList({ text: this.search.value, ...pagination });
  }

  onPaginationChange(pagination: IApiResponsePagination): void {
    this.table.tableData = null;
    this.getCidadaosList({ ...pagination });
  }

  onDetails(uuid: string): void {
    this.router.navigate(['/cidadaos', uuid]);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
