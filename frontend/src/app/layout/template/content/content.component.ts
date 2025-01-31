import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routeTransition } from '../../../app.routes';

@Component({
  selector: 'app-template-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransition],
})
export class TemplateContentComponent {
  constructor(protected route: ActivatedRoute) {}

  closeAlert(): void {}
}
