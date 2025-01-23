import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetronicDocumentationComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MetronicDocumentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
// test change
