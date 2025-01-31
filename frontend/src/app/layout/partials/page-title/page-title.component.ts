import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import {
  IPageTitle,
  PageTitleService,
} from '../../../services/page-title.service';
import {
  IBreadcrumbs,
  MetronicBreadcrumbsComponent,
} from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule, RouterModule, MetronicBreadcrumbsComponent],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  @Input() appPageTitleDirection: string = '';

  pageTitle!: IPageTitle | null;
  breadcrumbs: IBreadcrumbs = {
    name: 'breadcrumbs-demo',
    items: [],
    css: ['breadcrumb-line my-0 pt-1'],
  };
  animationClass: string = '';

  constructor(
    private pageTitleService: PageTitleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    let started = false;
    this.subscription = this.pageTitleService
      .getPageTitle()
      .subscribe((pageTitle: IPageTitle | null) => {
        if (!started && !pageTitle) {
          started = true;
          return;
        }
        this.animateOut();
        if (pageTitle) {
          this.pageTitle = pageTitle;
          this.breadcrumbs = {
            ...this.breadcrumbs,
            items: pageTitle?.breadcrumbs || [],
          };
          this.animationClass =
            'animate__animated animate__flipInX animate__faster';
          this.cdr.detectChanges();
        } else {
          setTimeout(() => {
            this.pageTitle = null;
            this.cdr.detectChanges();
          }, 400);
        }
      });
  }

  private animateOut() {
    this.animationClass = 'animate__animated animate__flipOutX animate__faster';

    setTimeout(() => {
      this.cdr.detectChanges();
    }, 1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
