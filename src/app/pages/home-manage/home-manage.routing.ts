import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
const routes: Routes = [
  { path: 'homeOne', component: HomeOneComponent },
];

export const HomeManageRoutes = RouterModule.forChild(routes);
