import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateSideBarLogoComponent } from './side-bar-logo/side-bar-logo.component';
import { TemplateSideBarFooterComponent } from './side-bar-footer/side-bar-footer.component';
import { TemplateSideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-template-side-bar',
  standalone: true,
  imports: [
    TemplateSideBarLogoComponent,
    TemplateSideBarMenuComponent,
    TemplateSideBarFooterComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarComponent {}
