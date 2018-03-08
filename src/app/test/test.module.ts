import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test.component';
import { MainContentComponent } from './components/main-content.component';
import { SidenavComponent } from './components/sidenav.component';
import { ToolbarComponent } from './components/toolbar.component';

import { MaterialModule } from './../components/shared/index';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: TestComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, MainContentComponent, SidenavComponent, ToolbarComponent]
})
export class TestModule { }
