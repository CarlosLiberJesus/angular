import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-side-bar-logo',
  imports: [MetronicIconComponent],
  templateUrl: './side-bar-logo.component.html',
  styleUrl: './side-bar-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarLogoComponent {
  leftIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-double-left',
    css: ['fs-2'],
  };
}
