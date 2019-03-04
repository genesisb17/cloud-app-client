import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3Component } from './components/s3/s3.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JenkinsComponent } from './components/jenkins/jenkins.component';

@NgModule({
  declarations: [
    AppComponent,
    S3Component,
    NavbarComponent,
    HomeComponent,
    JenkinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
