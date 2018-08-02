import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [ { path: 'signup', component: SignupPageComponent }, { path: 'login', component: LoginPageComponent }];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
