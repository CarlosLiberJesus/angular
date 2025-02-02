import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../../services/page-title.service';

@Component({
  selector: 'app-public-page-institucionais-equipa',
  standalone: true,
  imports: [],
  templateUrl: './equipa.component.html',
  styleUrl: './equipa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageInstitucionaisEquipaComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Equipa',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Equipa' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Equipa',
        description: 'Membros da equipa BeWhyOrg',
        image: 'img/banners/equipa.webp',
        url: 'https://bewhy.org/peticoes',
      },
    });
  }
}
