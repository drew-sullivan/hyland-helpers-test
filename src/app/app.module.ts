import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// @angular/material stuff must be imported AFTER BrowserModule
import {
  MaterialModule,
  ClapsComponent,
  PersonService,
  ClapService,
  PersonListComponent,
  PersonComponent,
  NavBarComponent,
  NewUserComponent,
} from './components/index';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent,
    ClapsComponent,
    NavBarComponent,
    NewUserComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [PersonService, ClapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
