import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { AntduiModule } from '../antdui/antdui/antdui.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../PageNotFound/PageNotFound.component';
@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    RouterModule,
    AntduiModule
  ],
  declarations: [PagesComponent,PageNotFoundComponent]
})
export class PagesModule { }
