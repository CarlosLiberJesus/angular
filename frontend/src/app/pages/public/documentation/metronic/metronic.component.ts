import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetronicDocumentationComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-public-page-documentation-metronic',
  standalone: true,
  imports: [MetronicDocumentationComponent],
  templateUrl: './metronic.component.html',
  styleUrl: './metronic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageDocumentationMetronicComponent {}
