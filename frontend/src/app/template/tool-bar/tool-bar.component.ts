import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-tool-bar',
  standalone: true,
  imports: [],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateToolBarComponent {
  @Input() appToolbarLayout!: string;
}
