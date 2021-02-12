import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
// iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//  routing
import { AppRoutingModule } from './app.routing';
// pages component
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

// componentes
import { CardComponent } from './components/card/card.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
// components shared
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorComponent } from './components/shared/error/error.component';
// pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { NoLogoPipe } from './pipes/no-logo.pipe';
import { TitleSizePipe } from './pipes/title-size.pipe';
import { TimePipe } from './pipes/time.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    ErrorComponent,
    PeliculaComponent,
    SearchCardsComponent,
    CardComponent,
    NoImagePipe,
    NoLogoPipe,
    TitleSizePipe,
    TimePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
