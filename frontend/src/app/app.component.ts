import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateModule } from './template/template.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
