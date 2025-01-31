import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-page-site-map',
  standalone: true,
  imports: [],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageSiteMapComponent {}
