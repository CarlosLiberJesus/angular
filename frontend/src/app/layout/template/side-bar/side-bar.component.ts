import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class TemplateSideBarComponent implements OnInit {
  ngOnInit(): void {
    document.body.setAttribute('data-kt-app-sidebar-hoverable', 'true');
    document.body.setAttribute('data-kt-app-sidebar-push-header', 'true');
    document.body.setAttribute('data-kt-app-sidebar-push-toolbar', 'true');
    document.body.setAttribute('data-kt-app-sidebar-push-footer', 'true');
    document.body.setAttribute('data-kt-app-sidebar-enabled', 'true');
    document.body.setAttribute('data-kt-app-sidebar-fixed', 'true');
    document.body.setAttribute('data-kt-app-toolbar-enabled', 'true');
    document.body.setAttribute('data-kt-app-header-minimize', 'on');
  }
}
