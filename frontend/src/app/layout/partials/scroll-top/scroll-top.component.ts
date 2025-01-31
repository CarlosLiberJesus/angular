import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-template-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateScrollTopComponent implements AfterViewInit {
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
          scrolltop.addEventListener('mouseover', function () {
            scrolltop.style.opacity = '1';
          });
          scrolltop.addEventListener('mouseleave', function () {
            scrolltop.style.opacity = '0.5';
          });
        } else {
          // Hide the scrolltop element
          scrolltop.style.display = 'none';
          scrolltop.style.opacity = '0';
        }
      });
    }
  }
}
