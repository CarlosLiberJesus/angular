import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-footer',
  imports: [RouterModule, MetronicIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFooterComponent implements OnInit {

  gitHubIcon: IIcon = {
      "library": "ki-duotone",
      "value": "ki-github",
      "css": [
        "text-white",
        "bg-dark",
        'fs-1', 'rounded', 'rounded-2'
      ]
    }

  siteMapIcon: IIcon = {
    "library": "ki-duotone",
    "value": "ki-route",
    "css": [
      "fs-1", 'rounded', 'rounded-2',
      'text-danger', 'bg-warning'
    ]
  }

  discordIcon: IIcon = {
    "library": "fa-brands",
    "value": "fa-discord",
    "css": [
      "fs-2",
      'text-info'
    ]
  }
  
  ngOnInit(): void {
    document.body.setAttribute('data-kt-app-footer-fixed', 'true');
  }
       
}
