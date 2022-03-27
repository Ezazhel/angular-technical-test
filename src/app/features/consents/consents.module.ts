import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentsComponent } from './consents.component';
import { ConsentsRoutingModule } from './consents-routing.module';

@NgModule({
  declarations: [ConsentsComponent],
  imports: [CommonModule, ConsentsRoutingModule],
})
export class ConsentsModule {}
