import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mixed-page-mixed',
  standalone: true,
  imports: [],
  templateUrl: './mixed.component.html',
  styleUrl: './mixed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageMixedComponent {}
