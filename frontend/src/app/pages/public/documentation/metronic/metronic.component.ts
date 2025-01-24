import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetronicDocumentationComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-metronic',
  standalone: true,
  imports: [MetronicDocumentationComponent],
  templateUrl: './metronic.component.html',
  styleUrl: './metronic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetronicComponent {}
