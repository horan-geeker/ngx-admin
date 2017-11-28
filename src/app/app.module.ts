/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {CoreModule} from './@core/core.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken, NbAuthModule,
  NbEmailPassAuthProvider,
} from '@nebular/auth';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    // NbAuthModule.forRoot({
    //   providers: {
    //     email: {
    //       service: NbEmailPassAuthProvider,
    //       config: {
    //         baseEndpoint: '/api/auth',
    //         login: {
    //           endpoint: '/login',
    //         },
    //         register: {
    //           endpoint: '/register',
    //         },
    //       },
    //     },
    //   },
    // }),

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ApiService,
    // {provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken},
  ],
})
export class AppModule {
}
