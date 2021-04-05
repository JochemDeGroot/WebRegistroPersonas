import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'account', component: NavbarComponent }, // TODO 
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, // Auto redirect to sign in page.
  { path: '**', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
