import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TemplateToolBarClassicComponent } from './classic/classic.component';
import { TemplateToolBarReportsComponent } from './reports/reports.component';
import { TemplateToolBarSaasComponent } from './saas/saas.component';
import { TemplateToolBarAccountingComponent } from './accounting/accounting.component';
import { TemplateToolBarExtendedComponent } from './extended/extended.component';
import { PageTitleComponent } from '../../partials/page-title/page-title.component';

@Component({
  selector: 'app-template-tool-bar',
  standalone: true,
  imports: [
    CommonModule,
    TemplateToolBarSaasComponent,
    TemplateToolBarReportsComponent,
    TemplateToolBarClassicComponent,
    TemplateToolBarAccountingComponent,
    TemplateToolBarExtendedComponent,
    PageTitleComponent,
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateToolBarComponent {
  appPageTitleDirection: string = 'column'; // TODO exemplos diff
  @Input() appToolbarLayout!:
    | 'classic'
    | 'accounting'
    | 'extended'
    | 'reports'
    | 'saas'
    | 'html'
    | 'none'; // TODO: Add more layouts

  showPageTitle() {
    const viewsWithPageTitles = ['classic', 'reports', 'saas'];
    // TODO: Why the validation ?
    return viewsWithPageTitles.some(t => t === this.appToolbarLayout);
  }
}
