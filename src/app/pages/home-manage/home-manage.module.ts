import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeManageRoutes } from './home-manage.routing';
import { AntduiModule } from '../../antdui/antdui/antdui.module';

@NgModule({
  imports: [
    CommonModule,
    HomeManageRoutes,
    AntduiModule
  ],
  declarations: [HomeOneComponent]
})
export class HomeManageModule { }
