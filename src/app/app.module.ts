import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { InitAuthGuard } from './guards/init-auth.guard';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent, canActivate: [  RequireAnonGuard ] },
  { path: 'login', component: LoginPageComponent, canActivate: [  RequireAnonGuard ] },
  { path: 'edit-profile', component: EditProfilePageComponent, canActivate: [  RequireUserGuard ] },
  { path: '', component: HomePageComponent, canActivate: [  InitAuthGuard ] },
  { path: '**', component: NotFoundPageComponent, canActivate: [  RequireUserGuard ] }

];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    EditProfilePageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    ApplicationCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    RequireAnonGuard,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
