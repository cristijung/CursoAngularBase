import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssistirComponent } from './pages/assistir/assistir.component';
import { CaracteresComponent } from './pages/caracteres/caracteres.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponentComponent } from './components/galeria-component/galeria-component.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgCaracteresComponent } from './components/img-caracteres/img-caracteres.component';
import { ShareMenuComponent } from './components/share-menu/share-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AssistirComponent,
    CaracteresComponent,
    ContatoComponent,
    GaleriaComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    GaleriaComponentComponent,
    HeaderComponent,
    ImgCaracteresComponent,
    ShareMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
