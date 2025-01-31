import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-page-institucionais',
  standalone: true,
  imports: [],
  templateUrl: './institucionais.component.html',
  styleUrl: './institucionais.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class PublicPageInstitucionaisComponent {

}
