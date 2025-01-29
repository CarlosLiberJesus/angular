import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService } from '../../../services/page-meta.service';

@Component({
  selector: 'app-public-page-documentation',
  standalone: true,
  imports: [],
  providers: [PageMetaService],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageDocumentationComponent {

  constructor(private pageMetaService: PageMetaService) {
    /*
    this.pageMetaService.setMeta({
      title: 'Documentation',
      description: 'Documentation page',
    });*/

    this.pageMetaService.setTitle('Documentação');
    this.pageMetaService.setDescription('Página de Documentação Técnica para Developers');
    setTimeout(() => {
      this.pageMetaService.setTitle('Documentação');

    }, 1000);
  }
}
