import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';

@Component({
  selector: 'app-documentacao',
  standalone: true,
  imports: [],
  templateUrl: './documentacao.component.html',
  styleUrl: './documentacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageDocumentacaoComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Documentação',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Documentação' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Documentação',
        description: 'Documentos gerados pelos utilizadores BeWhyOrg',
        image: 'img/banners/documentacao.webp',
        url: 'https://bewhy.org/documentacao',
      },
    });
  }
}
