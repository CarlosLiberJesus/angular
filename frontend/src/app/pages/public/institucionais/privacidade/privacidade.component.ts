import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../../services/page-title.service';

@Component({
  selector: 'app-public-page-institucionais-privacidade',
  standalone: true,
  imports: [],
  templateUrl: './privacidade.component.html',
  styleUrl: './privacidade.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageInstitucionaisPrivacidadeComponent implements OnInit {
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
        image: 'img/banners/privacidade.jpg',
        url: 'https://bewhy.org/documentacao',
      },
    });
  }
}
