import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { NotifyComponent } from './notify.component';

library.add(fas);

// Note: Do not provide the `NotifyService` in this module.
// Otherwise, any module that will import the `NotifyModule` will have a new instance of that service.
// For this reason, the `NotifyService` simply uses `@Injectable({ providedIn: 'root' })`
// For more details about the pattern, see: https://angular.io/guide/sharing-ngmodules

@NgModule({
  declarations: [
    NotifyComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    NotifyComponent,
  ],
})
export class NotifyModule { }
