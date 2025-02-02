import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';

@Component({
  selector: 'app-mixed-page-peticoes',
  standalone: true,
  imports: [],
  templateUrl: './peticoes.component.html',
  styleUrl: './peticoes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPagePeticoesComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Petições',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Petições' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Documentação',
        description: 'Vontade popular',
        image: 'img/banners/peticao.jpg',
        url: 'https://bewhy.org/peticoes',
      },
    });
  }
}
