import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { AntduiModule } from '../antdui/antdui/antdui.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    RouterModule,
    AntduiModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
