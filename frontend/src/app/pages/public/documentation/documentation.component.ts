import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FormArray, FormControl } from '@angular/forms';
import {
  IDocumentUrl,
  MetronicButtonGroupComponent,
} from '@carlosliberjesus/lib-metronic';
import { PageTitleService } from './../../../services/page-title.service';
import { TitleToolbarService } from '../../../services/title-toolbar.service';
import { DocumentationModel } from './documentation.model';
import { filter, Subject, takeUntil } from 'rxjs';
import {
  trigger,
  query,
  style,
  animate,
  transition,
} from '@angular/animations';
import { PublicPageDocumentationMetronicComponent } from './metronic/metronic.component';
import { PublicPageDocumentationLaravelComponent } from './laravel/laravel.component';
import { PublicPageDocumentationAngularComponent } from './angular/angular.component';

@Component({
  selector: 'app-public-page-documentation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MetronicButtonGroupComponent,
    PublicPageDocumentationMetronicComponent,
    PublicPageDocumentationLaravelComponent,
    PublicPageDocumentationAngularComponent,
  ],
  providers: [DocumentationModel],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeBetween', [
      transition('* => *', [
        query(':enter', [style({ opacity: 0, scale: 0.9 })], {
          optional: true,
        }),
        query(':leave', [animate('0.2s', style({ opacity: 0, scale: 0.9 }))], {
          optional: true,
        }),
        query(':enter', [animate('0.3s', style({ opacity: 1, scale: 1 }))], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class PublicPageDocumentationComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('pageTools', { read: TemplateRef })
  pageTools!: TemplateRef<HTMLElement>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  techForm: FormArray = new FormArray([new FormControl()], []);
  // Doc'ed ahead
  slug!: string;
  urlChoices: IDocumentUrl = {
    main: 'intro',
    element: 'intro',
  };

  constructor(
    private router: Router,
    private pageTitleService: PageTitleService,
    private titleToolbarService: TitleToolbarService,
    private cdr: ChangeDetectorRef,
    public documentationModel: DocumentationModel
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle({
      title: 'Documentação',
      description: 'Dados técnicos de suporte a programadores',
      breadcrumbs: this.documentationModel.breadcrumbs,
    });

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
  }

  updateUrlChoices(): void {
    const url = window.location.pathname;
    const parts = url.split('/').filter(part => part);
    if (parts.length >= 2) {
      this.urlChoices = {
        main: parts[0],
        element: parts[1],
      };
      this.techForm = new FormArray([new FormControl(parts[1])], []);
    } else {
      this.urlChoices = {
        main: 'documentacao',
        element: 'default',
      };
      this.techForm = new FormArray([new FormControl('default')], []);
    }
    this.onChange();
    this.slug = `${window.location.origin}/`;
  }

  ngAfterViewInit(): void {
    this.titleToolbarService.setTools(this.pageTools);
  }

  onChange(): void {
    this.documentationModel.updateTech(this.techForm.value);
    this.urlChoices.element = this.techForm.value[0];
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.titleToolbarService.setTools(null);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
