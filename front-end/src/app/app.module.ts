import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryItemsComponent } from './componants/category-items/category-items.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
