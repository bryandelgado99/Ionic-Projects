import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CvHomeComponent } from './cv-home/cv-home.component';
import { CvExpComponent } from './cv-exp/cv-exp.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'cv_home', component: CvHomeComponent },
      { path: 'cv_exp', component: CvExpComponent},
    ]),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
