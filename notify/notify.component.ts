import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Notify } from './notify.model';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  animations: [
    trigger('animateItem', [
      state('void', style({ opacity: 0, top: '-1rem' })),
      transition('void <=> *', animate('200ms ease-in')),
    ]),
  ],
})
export class NotifyComponent implements OnInit {

  constructor(public notifyService: NotifyService) { }

  ngOnInit() {
  }

  getClass(notif: Notify) {
    return `app-notify__item app-notify__item--${notif.type}`;
  }

  getIcon(notif: Notify) {
    switch (notif.type) {
      case 'info': return 'info-circle';
      case 'success': return 'check-circle';
      case 'warning': return 'exclamation-triangle';
      case 'error': return 'exclamation-circle';
    }
  }

  trackById(index: number, notif: Notify) {
    return notif.id;
  }
}
