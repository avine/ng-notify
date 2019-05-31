import { ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Notify, NotifyType } from './notify.model';

let uid = 1;
const getUID = () => uid++;

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  private notifs: Notify[] = [];

  private timeoutMap: { [id: number]: any; } = {};

  notifs$ = new ReplaySubject<Notify[]>();

  add(
    message: Pick<Notify, 'content' | 'title'>,
    type: NotifyType = 'info',
    duration = 5000,
  ) {
    // Add notif
    const id = getUID();
    this.notifs.unshift({ id, type, ...message});
    this.emit();

    // Return handler
    const removeHandler = () => this.remove(id);
    if (duration) {
      this.timeoutMap[id] = setTimeout(removeHandler, duration);
    }
    return removeHandler;
  }

  remove(id: number) {
    const index = this.notifs.findIndex(notif => notif.id === id);
    const success = index !== -1;
    if (success) {
      // Remove notif
      this.notifs.splice(index, 1);
      this.notifs = [...this.notifs];
      this.emit();

      // clearTimeout and cleanup `this.timeoutMap`
      if (this.timeoutMap[id]) {
        clearTimeout(this.timeoutMap[id]);
        delete this.timeoutMap[id];
      }
    }
    return success;
  }

  private emit() {
    this.notifs$.next(this.notifs);
  }
}
