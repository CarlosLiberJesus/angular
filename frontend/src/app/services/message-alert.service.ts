import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMessageAlert {
  code: number;
  url?: string;
  exception?: {
    message: string;
    file?: string;
    line?: number;
    errors?: string[];
  };
  message?: {
    title: string;
    message: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class MessageAlertService {
  private messageAlertSubject: BehaviorSubject<IMessageAlert | null> =
    new BehaviorSubject<IMessageAlert | null>(null);

  constructor() {}

  getMessageAlert() {
    return this.messageAlertSubject.asObservable();
  }

  setMessageAlert(messageAlert: IMessageAlert | null) {
    this.messageAlertSubject.next(messageAlert);
  }
}
