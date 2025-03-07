import { Injectable } from '@angular/core';
import { IBreadcrumb } from '@carlosliberjesus/lib-metronic';
import { BehaviorSubject } from 'rxjs';

export interface IPageTitle {
  title: string;
  description?: string;
  breadcrumbs?: IBreadcrumb[];
  socialMeta?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  oriSocialMeta = {
    facebook: {
      title: 'BeWhyOrg',
      description: 'O código liberta... Programamos democracia.',
      image: 'https://bewhy.org/img/logos/ico-dark-white.png',
      url: 'https://www.bewhy.org',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BewhyOrg',
      description: 'O código liberta... Programamos democracia.',
      image: 'https://bewhy.org/img/logos/ico-dark-white.png',
      site: '@BewhyOrg',
      alt: 'BewhyOrg',
      url: 'https://www.bewhy.org',
    },
  };

  private pageTitleSubject: BehaviorSubject<IPageTitle | null> =
    new BehaviorSubject<IPageTitle | null>(null);

  constructor() {}

  getPageTitle() {
    return this.pageTitleSubject.asObservable();
  }

  setPageTitle(pageTitle: IPageTitle | null) {
    this.pageTitleSubject.next(pageTitle);

    this.refreshSocialMeta(pageTitle);
  }

  refreshSocialMeta(pageTitle: IPageTitle | null) {
    if (!pageTitle) {
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.title);
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.description);
      document
        .querySelector('meta[property="og:image"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.image);
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.url);
      document
        .querySelector('meta[property="og:type"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.type);

      document
        .querySelector('meta[name="twitter:card"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.card);
      document
        .querySelector('meta[name="twitter:title"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.title);
      document
        .querySelector('meta[name="twitter:description"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.description);
      document
        .querySelector('meta[name="twitter:image"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.image);
      document
        .querySelector('meta[name="twitter:site"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.site);
      document
        .querySelector('meta[name="twitter:image:alt"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.alt);
      document
        .querySelector('meta[name="twitter:url"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.url);
    } else {
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.title ?? this.oriSocialMeta.facebook.title
        );
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.description ??
            this.oriSocialMeta.facebook.description
        );
      document
        .querySelector('meta[property="og:image"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.image ?? this.oriSocialMeta.facebook.image
        );
      document
        .querySelector('meta[property="og:url"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.url ?? this.oriSocialMeta.facebook.url
        );
      document
        .querySelector('meta[property="og:type"]')
        ?.setAttribute('content', this.oriSocialMeta.facebook.type);

      document
        .querySelector('meta[name="twitter:card"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.card);
      document
        .querySelector('meta[name="twitter:title"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.title ?? this.oriSocialMeta.twitter.title
        );
      document
        .querySelector('meta[name="twitter:description"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.description ??
            this.oriSocialMeta.twitter.description
        );
      document
        .querySelector('meta[name="twitter:image"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.image ?? this.oriSocialMeta.twitter.image
        );
      document
        .querySelector('meta[name="twitter:site"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.site);
      document
        .querySelector('meta[name="twitter:image:alt"]')
        ?.setAttribute('content', this.oriSocialMeta.twitter.alt);
      document
        .querySelector('meta[name="twitter:url"]')
        ?.setAttribute(
          'content',
          pageTitle.socialMeta?.url ?? this.oriSocialMeta.twitter.url
        );
    }
  }
}
