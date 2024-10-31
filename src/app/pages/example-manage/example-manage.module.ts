import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntduiModule } from '../../antdui/antdui/antdui.module';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleManageRoutes } from './example-manage.routing';

@NgModule({
  imports: [
    CommonModule,
    AntduiModule,
    ExampleManageRoutes
  ],
  declarations: [ExampleOneComponent]
})
export class ExampleManageModule { }
