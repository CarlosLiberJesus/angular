import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';

@Component({
  selector: 'app-mixed-page-fiscalizacao',
  standalone: true,
  imports: [],
  templateUrl: './fiscalizacao.component.html',
  styleUrl: './fiscalizacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageFiscalizacaoComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Fiscalização',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Fiscalização' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Fiscalização',
        description: 'Trabalhos de investigação BeWhyOrg',
        image: 'img/banners/fiscalizacao.jpg',
        url: 'https://bewhy.org/fiscalizacao',
      },
    });
  }
}
