import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateModule } from './layout/template/template.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  showMenuMobileClass: string = "drawer drawer-start drawer-on";
  mobileMenuActive: boolean = false;

  ngAfterViewInit() {
    const scrolltop: HTMLElement | null = document.querySelector('.scrolltop');

    if (scrolltop) {
      // Add scroll event listener to the window
      window.addEventListener('scroll', function () {
        // Check if the user has scrolled down more than 200 pixels
        if (window.scrollY > 200) {
          // Show the scrolltop element
          scrolltop.style.display = 'flex';
          scrolltop.style.opacity = '0.5';
        } else {
          // Hide the scrolltop element
          scrolltop.style.display = 'none';
          scrolltop.style.opacity = '0';
        }
      });
    }
  }

  onCloseMobileMenu(): void {
    if(this.mobileMenuActive) {
      this.mobileMenuActive = false;
    }
  }

  onOpenMobileMenu(): void {
    this.mobileMenuActive = true;
  }

  getSideBarClass(): string {
    return this.mobileMenuActive ? "app-sidebar flex-column " + this.showMenuMobileClass : "app-sidebar flex-column";
  }

  

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
