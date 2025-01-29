import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
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
  @Output() closeMobileMenu = new EventEmitter<void>();
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

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const toggleButton = document.querySelector('#kt_app_sidebar_mobile_toggle');

    if (toggleButton && (toggleButton.contains(targetElement) || this.elementRef.nativeElement.contains(targetElement))) {
      return;
    }

    this.closeMobileMenu.emit();
  }
}
