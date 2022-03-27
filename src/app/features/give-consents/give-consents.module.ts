import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveConsentsComponent } from './give-consents.component';
import { GiveConsentsRoutingModule } from './give-consents-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GiveConsentsComponent],
  imports: [
    CommonModule,
    GiveConsentsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class GiveConsentsModule {}
