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
    this.activeLink();
  }

  private activeLink(): void {
    let link, subMenu;
    this.links.forEach(link => {
      link.nativeElement.classList.remove('active');
    });
    if (this.urlChoices.main === undefined) {
      const firstLink = this.links.get(0);
      if (firstLink) {
        firstLink.nativeElement.classList.add('active');
      }
      this.submenus.forEach(submenu => {
        submenu.nativeElement.classList.remove('here');
        submenu.nativeElement.classList.remove('show');
      });
      return;
    } else if (this.urlChoices.main === 'institucionais') {
      subMenu = this.submenus.get(0);
      if (subMenu) {
        subMenu.nativeElement.classList.add('here');
        subMenu.nativeElement.classList.add('show');
      }
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
    } else if (
      ['documentacao', 'fiscalizacao', 'legislacao', 'peticoes'].includes(
        this.urlChoices.main
      )
    ) {
      subMenu = this.submenus.get(1);
      if (subMenu) {
        subMenu.nativeElement.classList.add('here');
        subMenu.nativeElement.classList.add('show');
      }
      switch (this.urlChoices.main) {
        case 'documentacao':
          link = this.links.get(5);
          if (link) {
            link.nativeElement.classList.add('active');
          }
          break;
        case 'fiscalizacao':
          link = this.links.get(6);
          if (link) {
            link.nativeElement.classList.add('active');
          }
          break;
        case 'legislacao':
          link = this.links.get(7);
          if (link) {
            link.nativeElement.classList.add('active');
          }
          break;
        case 'peticoes':
          link = this.links.get(8);
          if (link) {
            link.nativeElement.classList.add('active');
          }
          break;
        default:
          break;
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
