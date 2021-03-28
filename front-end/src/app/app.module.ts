import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';

// http://localhost:4200/
const routes: Routes = [

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},
  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},
  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent},
  // http://localhost:4200/S
  {path: '', redirectTo: '/orders',pathMatch: 'full'},
  // if user enter any thing without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'},


];

/*
*   // http://localhost:4200/
  {path: '', component:OrderItemsComponent}
* */
@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
