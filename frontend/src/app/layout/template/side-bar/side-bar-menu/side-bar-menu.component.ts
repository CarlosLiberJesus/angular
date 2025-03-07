import { SplashScreenService } from './../../../../services/splash-screen.service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  IDocumentUrl,
  IIcon,
  MetronicIconComponent,
} from '@carlosliberjesus/lib-metronic';
import { filter, Subject, takeUntil } from 'rxjs';

/**
 * Component representing the side bar menu in the application template.
 *
 * This component handles the display and interaction of the side bar menu,
 * including updating active links based on the current route, toggling submenus,
 * and managing the mobile menu state. It utilizes Angular's lifecycle hooks
 * to perform actions after the view initializes and before the component is destroyed.
 *
 * @selector 'app-template-side-bar-menu'
 * @implements AfterViewInit, OnDestroy
 *
 * @output closeMobileMenu - Emits an event to close the mobile menu.
 *
 * @viewChildren submenus - Query list of submenu elements.
 * @viewChildren links - Query list of link elements.
 *
 * @constructor
 * @param elementRef - Reference to the component's root element.
 * @param router - Angular Router for navigation events.
 * @param splashScreenService - Service to manage the splash screen visibility.
 */
@Component({
  selector: 'app-template-side-bar-menu',
  imports: [RouterModule, MetronicIconComponent],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarMenuComponent implements AfterViewInit, OnDestroy {
  @Output() closeMobileMenu = new EventEmitter<void>();
  @ViewChildren('submenu') submenus!: QueryList<ElementRef>;
  @ViewChildren('links') links!: QueryList<ElementRef>;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  slug!: string;
  urlChoices: IDocumentUrl = {
    main: '',
    element: '',
  };
  homeIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-home-2',
    css: ['fs-2'],
  };
  usIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-faceid',
    css: ['fs-2'],
  };
  servicesIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-abstract-26',
    css: ['fs-2'],
  };

  govIcon: IIcon = {
    library: 'las',
    value: 'la-landmark',
    css: ['fs-1', 'fw-bold'],
  };

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private splashScreenService: SplashScreenService
  ) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateUrlChoices();
      });

    // Handle the initial route
    this.updateUrlChoices();
    this.splashScreenService.setSplashScreen(false);
  }

  private updateUrlChoices(): void {
    const url = window.location.pathname;
    const parts = url.split('/').filter(part => part);
    this.urlChoices = {
      main: parts[0],
      element: parts[1],
    };
    this.slug = `${window.location.origin}/`;
    this.updateActiveLinkState();
  }

  /**
   * Updates the active state of sidebar menu links and submenus based on the current URL choices.
   * It removes the 'active' class from all links and conditionally adds it to the appropriate link
   * based on the `urlChoices` property. Additionally, it manages the visibility of submenus by
   * adding or removing 'here' and 'show' classes.
   *
   * Depende Demasiado do hard-code do URL e da posição dos links no array
   */
  private updateActiveLinkState(): void {
    if (this.links && this.links.length > 0) {
      for (const link of this.links) {
        link.nativeElement.classList.remove('active');
      }
      if (this.urlChoices.main === undefined) {
        const firstLink = this.links.get(0);
        if (firstLink) {
          firstLink.nativeElement.classList.add('active');
        }
        if (this.submenus && this.submenus.length > 0) {
          for (const submenu of this.submenus) {
            submenu.nativeElement.classList.remove('here');
            submenu.nativeElement.classList.remove('show');
          }
        }
        return;
      } else if (this.urlChoices.main === 'institucionais') {
        let subMenu = this.submenus.get(0);
        if (subMenu) {
          subMenu.nativeElement.classList.add('here');
          subMenu.nativeElement.classList.add('show');
        }
        let link;
        switch (this.urlChoices.element) {
          case 'equipa':
            link = this.links.get(1);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          case 'missao':
            link = this.links.get(2);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          case 'privacidade':
            link = this.links.get(3);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          case 'contactos':
            link = this.links.get(4);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          default:
            break;
        }
      } else if (['cidadaos', 'legislacao'].includes(this.urlChoices.main)) {
        let subMenu = this.submenus.get(1);
        if (subMenu) {
          subMenu.nativeElement.classList.add('here');
          subMenu.nativeElement.classList.add('show');
        }
        let link;
        switch (this.urlChoices.main) {
          case 'cidadaos':
            link = this.links.get(5);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          case 'legislacao':
            link = this.links.get(6);
            if (link) {
              link.nativeElement.classList.add('active');
            }
            break;
          default:
            break;
        }
      }
    }
  }

  toggleSubmenu(event: Event): void {
    const clicked = event.target as HTMLElement;
    if (clicked) {
      const subMenuChosen = clicked.closest('div');
      if (subMenuChosen?.classList.contains('menu-accordion')) {
        this.submenus.forEach(sub => {
          sub.nativeElement.classList.remove('here');
          sub.nativeElement.classList.remove('show');
        });
        subMenuChosen.classList.add('here');
        subMenuChosen.classList.add('show');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const toggleButton = document.querySelector(
      '#kt_app_sidebar_mobile_toggle'
    );

    if (
      toggleButton &&
      (toggleButton.contains(targetElement) ||
        this.elementRef.nativeElement.contains(targetElement))
    ) {
      return;
    }
    this.closeMobileMenu.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
