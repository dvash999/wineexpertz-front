import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';

import { HttpInterceptorService } from './shared/services/http/http-interceptor.service';
import { AppComponent } from './app.component';
import {customNotifierOptions} from './shared/notificationStyle';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(customNotifierOptions),
    // MatProgressSpinnerModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
