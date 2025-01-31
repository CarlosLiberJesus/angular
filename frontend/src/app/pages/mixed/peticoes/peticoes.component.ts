import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mixed-page-peticoes',
  standalone: true,
  imports: [],
  templateUrl: './peticoes.component.html',
  styleUrl: './peticoes.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class MixedPagePeticoesComponent {

}
