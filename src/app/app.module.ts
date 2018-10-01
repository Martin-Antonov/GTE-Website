import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {BackgroundComponent} from './components/background/background.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {DocsComponent} from './components/docs/docs.component';
import {InformationContainerComponent} from './components/information-container/information-container.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {DocsMenuComponent} from './components/docs/docs-menu/docs-menu.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    AboutComponent,
    DocsComponent,
    InformationContainerComponent,
    NavBarComponent,
    DocsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
