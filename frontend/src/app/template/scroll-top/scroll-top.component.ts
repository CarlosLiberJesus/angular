import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-template-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateScrollTopComponent {}
