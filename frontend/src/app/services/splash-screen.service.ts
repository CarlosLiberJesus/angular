import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  private splashScreenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  constructor() {}

  getSplashScreen() {
    return this.splashScreenSubject.asObservable();
  }

  setSplashScreen(value: boolean) {
    this.splashScreenSubject.next(value);
  }
}
