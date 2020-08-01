import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    redirectTo: ''
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'profile',
    component: DashboardComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: '404',
    component: PagenotfoundComponent
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
