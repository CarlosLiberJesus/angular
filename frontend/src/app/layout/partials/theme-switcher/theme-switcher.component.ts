import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  ThemeModeType,
  ThemeSwitcherService,
} from '../../../services/theme-switcher.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IIcon, MetronicIconComponent } from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, MetronicIconComponent],
  providers: [ThemeSwitcherService],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnDestroy {
  private unsubscribe: Subscription[] = [];

  moonIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-moon',
    css: ['fs-2'],
  };

  screenIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-screen',
    css: ['fs-3'],
  };

  nightDayIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-night-day',
    css: ['fs-2'],
  };

  @Input() toggleBtnClass: string = '';
  @Input() toggleBtnIconClass: string = 'svg-icon-2';
  @Input() menuPlacement: string = 'bottom-end';
  @Input() menuTrigger: string = "{default: 'click', lg: 'hover'}";
  mode$!: Observable<ThemeModeType>;
  menuMode$!: Observable<ThemeModeType>;

  constructor(private modeService: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.mode$ = this.modeService.mode.asObservable();
    this.menuMode$ = this.modeService.menuMode.asObservable();
  }

  switchMode(_mode: ThemeModeType): void {
    this.modeService.switchMode(_mode);
  }

  increaseFontSize(icon: IIcon): IIcon {
    return {
      ...icon,
      css: ['fs-3'],
    };
  }

  ngOnDestroy() {
    this.unsubscribe.forEach(sb => sb.unsubscribe());
  }
}
