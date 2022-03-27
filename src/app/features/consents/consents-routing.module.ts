import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentsComponent } from './consents.component';

const routes: Routes = [{ path: '', component: ConsentsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule],
})
export class ConsentsRoutingModule {}
