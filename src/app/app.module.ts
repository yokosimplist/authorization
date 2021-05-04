import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuardService } from './auth-guard.service';
// import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    // AuthGuardService,
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
