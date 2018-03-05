import { ClapService } from './claps/clap.service';
import { PersonService } from './shared/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';
import { ClapsComponent } from './claps/claps.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent,
    ClapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonService, ClapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
