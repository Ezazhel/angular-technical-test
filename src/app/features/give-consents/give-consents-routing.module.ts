import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveConsentsComponent } from './give-consents.component';

const routes: Routes = [
  {
    path: '',
    component: GiveConsentsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule],
})
export class GiveConsentsRoutingModule {}
