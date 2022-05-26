import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactComponent } from './main/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PictureColumnsComponent } from './main/home/picture-columns/picture-columns.component';
import { TecnologyCardComponent } from './main/about/tecnology-card/tecnology-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    PictureColumnsComponent,
    TecnologyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
