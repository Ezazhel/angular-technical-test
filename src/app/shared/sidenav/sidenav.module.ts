import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../shared.module';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SidenavComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
