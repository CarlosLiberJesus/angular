import {
  IButtonGroup,
  EInputType,
  IBreadcrumb,
} from '@carlosliberjesus/lib-metronic';

export class DocumentationModel {
  breadcrumbs: IBreadcrumb[] = [
    {
      title: 'Início',
      slug: '/',
      cssLink: ['fw-bold text-hover-primary text-muted cursor-pointer'],
    },
    { title: 'Documentação' },
  ];

  techStacks: IButtonGroup = {
    name: 'techButtonGroup',
    type: EInputType.RADIO,
    cssContainer: ['unselect'],
    active: {
      color: '',
      css: ['text-white', 'fw-bold'],
    },
    element: [
      {
        button: {
          text: 'Metronic',
          css: [
            'btn',
            'btn-sm',
            'btn-active-info',
            'btn-outline',
            'btn-color-muted',
            'd-flex',
            'justify-content-center',
            'align-items-center',
          ],
          iconFirst: {
            library: 'ki-outline',
            value: 'ki-html',
            css: ['fs-3', 'me-2'],
          },
        },
        value: 'metronic',
      },
      {
        button: {
          text: 'Angular',
          css: [
            'btn',
            'btn-sm',
            'btn-outline',
            'btn-active-danger',
            'btn-color-muted',
            'd-flex',
            'justify-content-center',
            'align-items-center',
          ],
          iconFirst: {
            library: 'ki-outline',
            value: 'ki-angular',
            css: ['fs-3', 'me-2'],
          },
        },
        value: 'angular',
      },
      {
        button: {
          text: 'Laravel',
          css: [
            'btn',
            'btn-sm',
            'btn-active-warning',
            'btn-outline',
            'btn-color-muted',
            'd-flex',
            'justify-content-center',
            'align-items-center',
          ],
          iconFirst: {
            library: 'ki-outline',
            value: 'ki-laravel',
            css: ['fs-3', 'me-2'],
          },
        },
        value: 'laravel',
      },
    ],
    label: {
      text: 'Escolha a tecnologia',
      css: ['fs-5', 'fw-semibold'],
    },
  };

  public updateTech(tech: string[]): void {
    // find the position of the button which have a value equal to tech[0]
    const selectedIndex = this.techStacks.element.findIndex(
      element => element.value === tech[0]
    );
    // remove the active class from all buttons
    this.techStacks.element.forEach(element => {
      element.button.css = element.button.css?.filter(css => css !== 'active');
    });
    // add the active class to the selected button
    if (selectedIndex !== -1) {
      this.techStacks.element[selectedIndex].button.css?.push('active');
    }
  }
}
