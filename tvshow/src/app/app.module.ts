import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowCardComponent } from './show-card/show-card.component';
import { SearchComponent } from './search/search.component';
import { GenreComponent } from './genre/genre.component';
import { FormsModule } from '@angular/forms';
import { BackComponent } from './back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    DetailsComponent,
    ShowCardComponent,
    SearchComponent,
    GenreComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
