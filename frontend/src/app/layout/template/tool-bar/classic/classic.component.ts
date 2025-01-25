import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-template-tool-classic',
  imports: [],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateToolBarClassicComponent {}
