import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../../services/page-title.service';

@Component({
  selector: 'app-public-page-institucionais-missao',
  standalone: true,
  imports: [],
  templateUrl: './missao.component.html',
  styleUrl: './missao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageInstitucionaisMissaoComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Missão',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Missão' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Documentação',
        description: 'Vontade popular',
        image: 'img/banners/missao.jpg',
        url: 'https://bewhy.org/missao',
      },
    });
  }
}
