import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent, NewUserComponent } from './components/index';

const routes: Routes = [
  { path: 'personlist', component: PersonListComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: '', redirectTo: '/personlist', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, /* { enableTracing: true } */)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
