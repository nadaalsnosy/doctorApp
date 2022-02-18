import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VisitsComponent } from './components/visits/visits.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'doctor/:id',
    component: DoctorDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'visits',
    component: VisitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
