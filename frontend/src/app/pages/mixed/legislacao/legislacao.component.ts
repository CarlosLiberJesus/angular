import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';

@Component({
  selector: 'app-mixed-page-legislacao',
  standalone: true,
  imports: [],
  templateUrl: './legislacao.component.html',
  styleUrl: './legislacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageLegislacaoComponent implements OnInit {
  private initialized = false;

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    if (!this.initialized) {
      this.pageTitleService.setPageTitle({
        title: 'Legislação',
        breadcrumbs: [
          {
            title: 'Início',
            slug: '/',
            cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
          },
          { title: 'Legislação' },
        ],
        socialMeta: {
          title: 'BeWhyOrg - Legislação',
          description: 'Revisão do regime jurídico',
          image: 'img/banners/legislacao.jpg',
          url: 'https://bewhy.org/legislacao',
        },
      });
      this.initialized = true;
    }
  }
}
