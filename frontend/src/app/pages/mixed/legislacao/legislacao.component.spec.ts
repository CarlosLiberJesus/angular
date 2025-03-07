import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixedPageLegislacaoComponent } from './legislacao.component';
import { PageTitleService } from '../../../services/page-title.service';

describe('LegislacaoComponent', () => {
  let component: MixedPageLegislacaoComponent;
  let fixture: ComponentFixture<MixedPageLegislacaoComponent>;
  let pageTitleServiceSpy: jasmine.SpyObj<PageTitleService>;

  beforeEach(async () => {
    pageTitleServiceSpy = jasmine.createSpyObj('PageTitleService', [
      'setPageTitle',
    ]);
    await TestBed.configureTestingModule({
      imports: [MixedPageLegislacaoComponent],
      providers: [{ provide: PageTitleService, useValue: pageTitleServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPageLegislacaoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set page title with correct parameters on init', () => {
    component.ngOnInit();
    expect(pageTitleServiceSpy.setPageTitle).toHaveBeenCalledWith({
      title: 'Legislação',
      breadcrumbs: [
        {
          title: 'Início',
          slug: '/',
          cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
        },
        { title: 'Legislação' },
      ],
      socialMeta: {
        title: 'BeWhyOrg - Legislação',
        description: 'Revisão do regime jurídico',
        image: 'img/banners/legislacao.jpg',
        url: 'https://bewhy.org/legislacao',
      },
    });
  });

  it('should update page title to "Legislação" on init', () => {
    component.ngOnInit();
    expect(pageTitleServiceSpy.setPageTitle).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title: 'Legislação',
      })
    );
  });

  it('should handle error when PageTitleService fails', () => {
    pageTitleServiceSpy.setPageTitle.and.throwError('Service unavailable');
    spyOn(console, 'error');
    expect(() => component.ngOnInit()).toThrowError('Service unavailable');
    expect(pageTitleServiceSpy.setPageTitle).toHaveBeenCalled();
  });

  it('should set breadcrumbs with home and current page on init', () => {
    component.ngOnInit();
    expect(pageTitleServiceSpy.setPageTitle).toHaveBeenCalledWith(
      jasmine.objectContaining({
        breadcrumbs: jasmine.arrayContaining([
          jasmine.objectContaining({ title: 'Início', slug: '/' }),
          jasmine.objectContaining({ title: 'Legislação' }),
        ]),
      })
    );
  });

  it('should set social meta information on init', () => {
    component.ngOnInit();
    const callArgs =
      pageTitleServiceSpy.setPageTitle.calls.mostRecent().args[0];
    expect(callArgs?.socialMeta).toBeDefined();
    expect(callArgs?.socialMeta?.title).toContain('BeWhyOrg');
  });

  it('should call setPageTitle once when ngOnInit is called multiple times', () => {
    component.ngOnInit();
    component.ngOnInit();

    expect(pageTitleServiceSpy.setPageTitle.calls.count()).toBe(1);
  });

  it('should handle destruction gracefully before PageTitleService completes', () => {
    component.ngOnInit();
    fixture.destroy();
    expect(pageTitleServiceSpy.setPageTitle).toHaveBeenCalled();
  });
});
