import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  IMessageAlert,
  MessageAlertService,
} from '../../../services/message-alert.service';
import {
  IAlert,
  IIcon,
  MetronicAlertComponent,
} from '@carlosliberjesus/lib-metronic';

@Component({
  selector: 'app-template-message-alert',
  standalone: true,
  imports: [CommonModule, MetronicAlertComponent],
  templateUrl: './message-alert.component.html',
  styleUrl: './message-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateMessageAlertComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  alert!: IAlert;
  activeAlert: boolean = false;

  errorIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-shield',
    css: ['fs-2hx', 'me-4', 'text-danger'],
  };
  warningIcon: IIcon = {
    library: 'ki-duotone',
    value: 'ki-scroll',
    css: ['fs-2hx', 'me-4', 'text-warning'],
  };

  constructor(
    private messageAlertService: MessageAlertService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.messageAlertService
      .getMessageAlert()
      .subscribe((msgAlert: IMessageAlert | null) => {
        if (msgAlert) {
          const result = this.generateAlert(msgAlert);
          if (result) {
            this.alert = result;
            setTimeout(() => {
              this.activeAlert = true;
              this.cdr.detectChanges();
            }, 1);
          }
        } else {
          setTimeout(() => {
            this.activeAlert = false;
            this.cdr.detectChanges();
          }, 1);
        }
      });
  }

  private generateAlert(msgAlert: IMessageAlert): IAlert | null {
    const baseAlert = {
      animations: {
        in: ['animate__animated animate__flipInX animate__faster'],
        out: ['animate__animated animate__flipOutX animate__faster'],
      },
      css: ['ms-5', 'alert-dismissible'],
    };

    switch (msgAlert.code) {
      case 200:
        return {
          ...baseAlert,
          title: msgAlert.message?.title || 'Sucesso!',
          text: msgAlert.message?.message || 'Operação realizada com sucesso.',
          css: [...baseAlert.css, 'alert-success'],
          icon: {
            library: '',
            value: '',
            css: ['text-success'],
          },
        };
      case 404:
        return {
          ...baseAlert,
          title: msgAlert.message?.title || 'Recurso não encontrado!',
          text: 'Não foi encontrada referência ao seu pedido. Se o problema persistir, reporte a página.',
          css: [...baseAlert.css, 'alert-warning'],
          icon: this.warningIcon,
        };
      case 500:
        if (msgAlert.message) {
          return {
            ...baseAlert,
            title: msgAlert.message.title || 'Erro interno!',
            text:
              msgAlert.message.message ||
              'Ocorreu um erro interno no servidor. Se o problema persistir, reporte a página',
            css: [...baseAlert.css, 'alert-danger'],
            icon: this.errorIcon,
          };
        } else if (msgAlert.exception) {
          return {
            ...baseAlert,
            title: msgAlert.exception.file
              ? msgAlert.exception.file + ':' + msgAlert.exception.line
              : 'Erro interno!',
            text: msgAlert.exception.message,
            css: [...baseAlert.css, 'alert-danger'],
            icon: this.errorIcon,
          };
        }
        break;
    }

    return null;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
