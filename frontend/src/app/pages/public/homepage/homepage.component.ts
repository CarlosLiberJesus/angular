import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleService } from '../../../services/page-title.service';

@Component({
  selector: 'app-public-page-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageHomepageComponent {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle(null);
  }
}
