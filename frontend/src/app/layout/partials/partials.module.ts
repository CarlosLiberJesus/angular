import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TemplateScrollTopComponent } from './scroll-top/scroll-top.component';
import { TemplateSplashScreenComponent } from './splash-screen/splash-screen.component';
import { SplashScreenService } from '../../services/splash-screen.service';
import { TemplateMessageAlertComponent } from './message-alert/message-alert.component';
import { MessageAlertService } from '../../services/message-alert.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageTitleComponent,
    ThemeSwitcherComponent,
    TemplateScrollTopComponent,
    TemplateSplashScreenComponent,
    TemplateMessageAlertComponent,
  ],
  providers: [SplashScreenService, MessageAlertService],
  exports: [
    ThemeSwitcherComponent,
    PageTitleComponent,
    TemplateScrollTopComponent,
    TemplateSplashScreenComponent,
    TemplateMessageAlertComponent,
  ],
})
export class PartialsModule {}
