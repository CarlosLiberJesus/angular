import { Injectable } from '@angular/core';
import { IBreadcrumb } from '@carlosliberjesus/lib-metronic';
import { BehaviorSubject } from 'rxjs';

export interface IPageTitle {
  title: string;
  description?: string;
  breadcrumbs?: IBreadcrumb[];
}

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private pageTitleSubject: BehaviorSubject<IPageTitle | null> =
    new BehaviorSubject<IPageTitle | null>(null);

  constructor() {}

  getPageTitle() {
    return this.pageTitleSubject.asObservable();
  }

  setPageTitle(pageTitle: IPageTitle | null) {
    this.pageTitleSubject.next(pageTitle);
  }
}
