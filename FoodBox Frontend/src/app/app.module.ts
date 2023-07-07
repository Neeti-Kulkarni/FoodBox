import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddFoodComponent } from './admin-add-food/admin-add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserAddFoodToCartComponent } from './user-add-food-to-cart/user-add-food-to-cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPortalComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminAddFoodComponent,
    EditFoodComponent,
    AboutComponent,
    ContactUsComponent,
    UserPortalComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserAddFoodToCartComponent,
    UserCartComponent,
    UserCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
