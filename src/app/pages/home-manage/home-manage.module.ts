import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeManageRoutes } from './home-manage.routing';
import { AntduiModule } from '../../antdui/antdui/antdui.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HomeManageRoutes,
    AntduiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeOneComponent]
})
export class HomeManageModule { }
