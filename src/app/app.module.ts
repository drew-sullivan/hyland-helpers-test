import { ClapService } from './claps/clap.service';
import { PersonService } from './shared/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ClapsComponent } from './claps/claps.component';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent,
    ClapsComponent
    NavBarComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService, ClapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
