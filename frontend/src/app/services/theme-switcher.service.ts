import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeModeType = 'dark' | 'light' | 'system';
const systemMode = window.matchMedia('(prefers-color-scheme: dark)')
  ? 'dark'
  : 'light';
const _themeModeSwitchHelper = (_mode: ThemeModeType) => {
  // change background image url
  const mode = _mode !== 'system' ? _mode : systemMode;
  const imageUrl =
    './assets/metronic/media/patterns/header-bg' +
    (mode === 'light' ? '.jpg' : '-dark.png');
  document.body.style.backgroundImage = `url("${imageUrl}")`;
};

const themeModeLSKey = 'kt_theme_mode_value';
const themeMenuModeLSKey = 'kt_theme_mode_menu';

const getThemeModeFromLocalStorage = (lsKey: string): ThemeModeType => {
  if (!localStorage) {
    return 'light';
  }

  const data = localStorage.getItem(lsKey);
  if (!data) {
    return 'light';
  }

  if (data === 'light') {
    return 'light';
  }

  if (data === 'dark') {
    return 'dark';
  }

  return 'system';
};

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  public mode: BehaviorSubject<ThemeModeType> =
    new BehaviorSubject<ThemeModeType>(
      getThemeModeFromLocalStorage(themeModeLSKey)
    );
  public menuMode: BehaviorSubject<ThemeModeType> =
    new BehaviorSubject<ThemeModeType>(
      getThemeModeFromLocalStorage(themeMenuModeLSKey)
    );

  constructor() {}

  public updateMode(_mode: ThemeModeType) {
    const updatedMode = _mode === 'system' ? systemMode : _mode;
    this.mode.next(updatedMode);
    // themeModeSwitchHelper(updatedMode)
    if (localStorage) {
      localStorage.setItem(themeModeLSKey, updatedMode);
    }

    document.documentElement.setAttribute('data-bs-theme', updatedMode);
  }

  public updateMenuMode(_menuMode: ThemeModeType) {
    this.menuMode.next(_menuMode);
    if (localStorage) {
      localStorage.setItem(themeMenuModeLSKey, _menuMode);
    }
  }

  public init() {
    this.updateMode(this.mode.value);
    this.updateMenuMode(this.menuMode.value);
  }

  public switchMode(_mode: ThemeModeType) {
    if (localStorage) {
      const updatedMode = _mode === 'system' ? systemMode : _mode;
      localStorage.setItem(themeModeLSKey, updatedMode);
      localStorage.setItem(themeMenuModeLSKey, _mode);
    }
    document.location.reload();
  }
}
