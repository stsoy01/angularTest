import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PartnersComponent } from './components/partners/partners.component'


const appRoutes: Routes = [
  // { path: '/', component: AppComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'partners', component: PartnersComponent },
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, MainComponent, GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
