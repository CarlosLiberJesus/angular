import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../../services/page-title.service';

@Component({
  selector: 'app-public-page-institucionais-contactos',
  standalone: true,
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageInstitucionaisContactosComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Contactos',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Contactos' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Contactos',
        description: 'Contactos Gerais com a BeWhyOrg',
        image: 'img/banners/contacto.png',
        url: 'https://bewhy.org/contactos',
      },
    });
  }
}
