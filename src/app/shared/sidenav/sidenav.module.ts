import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [SharedModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
