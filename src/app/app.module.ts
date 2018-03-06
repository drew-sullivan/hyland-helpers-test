import { ClapService } from './claps/clap.service';
import { PersonService } from './shared/person.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

// @angular/material stuff must be imported AFTER BrowserModule
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

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
    ClapsComponent,
    NavBarComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [PersonService, ClapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
