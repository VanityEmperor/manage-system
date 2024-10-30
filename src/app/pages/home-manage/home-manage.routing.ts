import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
const routes: Routes = [
  { path: 'homeOne', component: HomeOneComponent },
  { path: 'homeTwo', component: HomeTwoComponent },
];

export const HomeManageRoutes = RouterModule.forChild(routes);
