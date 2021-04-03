import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './componants/card-status/card-status.component';
import { PurchasesComponent } from './componants/purchases/purchases.component';
import { CheckOutComponent } from './componants/check-out/check-out.component';

// http://localhost:4200/
const routes: Routes = [


  // http://localhost:4200/purchases
  {path: 'purchases', component:PurchasesComponent},

  // http://localhost:4200/order/id
  {path: 'order/:id', component:OrderDetailsComponent},

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},

  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},

  // http://localhost:4200/orders/key
  {path: 'orders/:key', component:OrderItemsComponent},

  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent},

  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},

  // if user enter any thing without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'}

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
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent,
    CardStatusComponent,
    PurchasesComponent,
    CheckOutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    //NgModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
