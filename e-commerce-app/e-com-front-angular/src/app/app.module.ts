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
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';
import { CartPageContainerComponent } from './components/cart-page-container/cart-page-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

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
    ButtonComponent,
    CartPageComponent,
    QuantityInputComponent,
    CartPageContainerComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
