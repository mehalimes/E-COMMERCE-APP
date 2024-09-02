import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { ContainerComponent } from './components/container/container.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductPageContainerComponent } from './components/product-page-container/product-page-container.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductCardComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    ProductPageContainerComponent,
    PopUpComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderComponent,
    StoreModule.forRoot({ app: appReducer })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
