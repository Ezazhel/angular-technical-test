import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveConsentsComponent } from './give-consents.component';
import { GiveConsentsRoutingModule } from './give-consents-routing.module';

@NgModule({
  declarations: [GiveConsentsComponent],
  imports: [CommonModule, GiveConsentsRoutingModule],
})
export class GiveConsentsModule {}
