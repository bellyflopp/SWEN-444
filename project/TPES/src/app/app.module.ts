import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import {BaseModule} from './base/base.module';
import {AuthenticationService} from './accounts/services/authentication.service';
import {AccountsModule} from './accounts/accounts.module';
import {HomeComponent} from './base/components/pages/home/home.component';


export function getToken() {
    return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AccountsModule,
    BaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lessons',
        loadChildren: './lessons/lessons.module#LessonsModule'
      }
    ]),
    HttpClientModule,
    CommonModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
