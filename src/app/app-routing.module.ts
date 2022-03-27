import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'give-consents',
    loadChildren: () =>
      import('./features/give-consents/give-consents.module').then(
        (m) => m.GiveConsentsModule
      ),
  },
  {
    path: 'consents',
    loadChildren: () =>
      import('./features/consents/consents.module').then(
        (m) => m.ConsentsModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
