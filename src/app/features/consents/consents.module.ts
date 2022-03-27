import { NgModule } from '@angular/core';
import { ConsentsComponent } from './consents.component';
import { ConsentsRoutingModule } from './consents-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ConsentsComponent],
  imports: [SharedModule, ConsentsRoutingModule],
})
export class ConsentsModule {}
