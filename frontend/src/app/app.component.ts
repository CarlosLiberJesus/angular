import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateModule } from './layout/template/template.module';
import { TemplateSplashScreenComponent } from './layout/partials/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateModule, TemplateSplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showMenuMobileClass: string = 'drawer drawer-start drawer-on';
  mobileMenuActive: boolean = false;
  toolbarLayout: string = 'classic';

  constructor() {}
  ngAfterContentInit(): void {}

  onCloseMobileMenu(): void {
    if (this.mobileMenuActive) {
      this.mobileMenuActive = false;
    }
  }

  onOpenMobileMenu(): void {
    this.mobileMenuActive = true;
  }

  getSideBarClass(): string {
    return this.mobileMenuActive
      ? 'app-sidebar flex-column ' + this.showMenuMobileClass
      : 'app-sidebar flex-column';
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
