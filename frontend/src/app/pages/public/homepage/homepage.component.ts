import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  EEvent,
  EInputType,
  EPosition,
  IInput,
  MetronicInputComponent,
} from '@carlosliberjesus/lib-metronic';
import { PublicPageDocumentationMetronicComponent } from '../documentation/metronic/metronic.component';

@Component({
  selector: 'app-homepage',
  imports: [
    ReactiveFormsModule,
    MetronicInputComponent,
    PublicPageDocumentationMetronicComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPageHomepageComponent {
  username: FormControl = new FormControl([], []);
  password: FormControl = new FormControl([], []);

  standard: IInput = {
    name: 'fakeInput',
    type: EInputType.TEXT,
    placeholder: 'Etiqueta',
    cssInputContainer: ['mb-3', 'w-100px'],
    cssInput: [],
    label: {
      text: 'Título',
      css: ['fs-5', 'fw-semibold'],
      extra: 'Adicione também uma mensagem extra',
      cssExtra: ['fs-7', 'fw-semibold', 'text-muted'],
      icon: {
        library: 'bi',
        value: 'bi-info-square-fill',
        css: ['fs-8', 'ms-2', 'cursor-pointer'],
        popOver: {
          content: ' exibir',
          event: EEvent.HOVER,
          position: EPosition.TOP,
          cssContainer: ['fade show'],
        },
      },
    },
  };
}
