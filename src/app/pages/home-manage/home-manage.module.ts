import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeManageRoutes } from './home-manage.routing';
import { AntduiModule } from '../../antdui/antdui/antdui.module';
import { HomeTwoComponent } from './home-two/home-two.component';

@NgModule({
  imports: [
    CommonModule,
    HomeManageRoutes,
    AntduiModule
  ],
  declarations: [HomeOneComponent,HomeTwoComponent]
})
export class HomeManageModule { }
