import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetronicIconComponent, IIcon } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-public-page-documentation-laravel',
  standalone: true,
  imports: [MetronicIconComponent],
  templateUrl: './laravel.component.html',
  styleUrl: './laravel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageDocumentationLaravelComponent {
  gitHubIcon: IIcon = {
    library: 'ki-solid',
    value: 'ki-github',
    css: ['fs-4x', 'text-dark'],
  };
}
