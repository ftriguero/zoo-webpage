import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'feeding', component: MessagesComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
