import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-side-bar-footer',
  imports: [MetronicIconComponent, RouterModule],
  templateUrl: './side-bar-footer.component.html',
  styleUrl: './side-bar-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarFooterComponent {
  docIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-document',
    css: ['fs-2 m-0'],
  };
}
