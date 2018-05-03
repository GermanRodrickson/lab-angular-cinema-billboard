import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from "@angular/router";


import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { MoviePagesComponent } from './pages/movie-pages/movie-pages.component';

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "home", component: HomePagesComponent },
  { path: "movie/:id", component: MoviePagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    MoviePagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
