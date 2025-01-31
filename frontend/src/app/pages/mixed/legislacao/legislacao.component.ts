import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mixed-page-legislacao',
  standalone: true,
  imports: [],
  templateUrl: './legislacao.component.html',
  styleUrl: './legislacao.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedPageLegislacaoComponent {}
