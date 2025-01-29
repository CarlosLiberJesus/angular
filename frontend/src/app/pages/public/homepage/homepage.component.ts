import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageHomepageComponent {}
