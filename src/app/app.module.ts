import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProductosComponent } from './components/productos/productos.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { products } from './products';
import { SliderComponent } from './components/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    SobreComponent,
    ProductosComponent,
    ListCartComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
