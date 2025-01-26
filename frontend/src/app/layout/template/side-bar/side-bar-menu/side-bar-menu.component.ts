import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-side-bar-menu',
  imports: [RouterModule, MetronicIconComponent],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarMenuComponent {
  homeIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-home-2',
    css: ['fs-2'],
  };
  usIntro: IIcon = {
    library: 'ki-duotone',
    value: 'ki-faceid',
    css: ['fs-2'],
  };
}
