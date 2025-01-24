import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-template-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSideBarComponent {}
