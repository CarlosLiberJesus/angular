import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../../../services/api-service.service';
import { PageTitleService } from '../../../../services/page-title.service';
import { ActivatedRoute } from '@angular/router';
import { ICidadao } from '../../../../lib/interfaces/cidadao-responses';

@Component({
  selector: 'app-cidadao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cidadao.component.html',
  styleUrl: './cidadao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageCidadaoComponent implements OnInit {
  cidadao!: ICidadao;

  constructor(
    private route: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.apiService.get<ICidadao>(`/cidadao/${uuid}`).subscribe(response => {
      if (response.code === 200) {
        if (response.data) {
          this.cidadao = response.data;
          this.pageTitleService.setPageTitle({
            title: 'Cidadãos',
            breadcrumbs: [
              {
                title: 'Início',
                slug: '/',
                cssLink: [
                  'fw-bold text-hover-primary text-muted cursor-pointer',
                ],
              },
              {
                title: 'Cidadãos',
                slug: '/cidadaos',
                cssLink: [
                  'fw-bold text-hover-primary text-muted cursor-pointer',
                ],
              },
              { title: 'Cidadão ' + this.cidadao.nome },
            ],
            socialMeta: {
              title: 'BeWhyOrg - Cidadaos',
              description: 'Cidadão ' + this.cidadao.nome,
              image: 'https://bewhy.org/img/logos/ico-dark-white.png',
              url: 'https://bewhy.org/cidadaos',
            },
          });
        }
      }
    });
  }
}
