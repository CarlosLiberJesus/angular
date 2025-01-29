import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PageLink, PageMetaService } from '../../../services/page-meta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  providers: [PageMetaService],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() appPageTitleDirection: string = '';

  title$!: Observable<string>;
  description$!: Observable<string>;
  bc$!: Observable<Array<PageLink>>;

  constructor(private pageMeta: PageMetaService) {}

  ngOnInit(): void {
    this.title$ = this.pageMeta.title
      .asObservable()
      .pipe(takeUntil(this.destroy$));
    this.description$ = this.pageMeta.description
      .asObservable()
      .pipe(takeUntil(this.destroy$));
    this.bc$ = this.pageMeta.breadcrumbs
      .asObservable()
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
