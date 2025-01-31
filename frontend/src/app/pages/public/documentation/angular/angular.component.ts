import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-public-page-documentation-angular',
  standalone: true,
  imports: [MetronicIconComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageDocumentationAngularComponent {
  gitHubIcon: IIcon = {
    library: 'ki-solid',
    value: 'ki-github',
    css: ['fs-4x', 'text-dark'],
  };
}
