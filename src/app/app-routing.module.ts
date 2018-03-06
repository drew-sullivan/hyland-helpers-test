import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { NewUserComponent } from './new-user/new-user.component';

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
