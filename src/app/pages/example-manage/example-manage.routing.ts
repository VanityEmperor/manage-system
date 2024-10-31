import { Routes, RouterModule } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
const routes: Routes = [
  { 
    path: 'exampleOne', 
    component: ExampleOneComponent,
    data: {
      breadcrumb: '首页展示'
    }
   },
];

export const ExampleManageRoutes = RouterModule.forChild(routes);
