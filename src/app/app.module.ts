import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './graphics_components/button/button.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactComponent} from './contact/contact.component';
import {AmbassadeurDetailsComponent} from './ambassadeur_details/ambassadeur-details.component';
import {RestauThumbnailComponent} from './graphics_components/restau-thumbnail/restau-thumbnail.component';
import {RestaurantDetailsComponent} from './restaurant_details/restaurant-details.component';
import {AppService} from './app.service';
import {GalleryComponent} from './graphics_components/gallery/gallery.component';
import {CommentThumbnailComponent} from './graphics_components/comment-thumbnail/comment-thumbnail.component';
import {GalleriaModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './graphics_components/map/map.component';
import { NotationComponent } from './graphics_components/notation/notation.component';
import { RatingModule } from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    SearchComponent,
    ContactComponent,
    AmbassadeurDetailsComponent,
    RestauThumbnailComponent,
    RestaurantDetailsComponent,
    GalleryComponent,
    CommentThumbnailComponent,
    MapComponent,
    NotationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GalleriaModule,
    AccordionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARF16InowHPxqzlCjiv15QGK2p_3n596M'
    }),
    RatingModule


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
