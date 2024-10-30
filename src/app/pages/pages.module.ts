import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
