import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
const routes: Routes = [
  { 
    path: 'homeOne', 
    component: HomeOneComponent,
    data: {
      breadcrumb: '首页展示'
    }
   },
  { path: 'homeTwo',
    component: HomeTwoComponent,
    data: {
      breadcrumb: 'homeTwo'
    }
   },
];

export const HomeManageRoutes = RouterModule.forChild(routes);
