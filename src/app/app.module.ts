import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { FormsModule } from '@angular/forms';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    MessagesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
