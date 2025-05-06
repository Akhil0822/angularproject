import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { securityGuard } from './security.guard';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'viewpizza',
    component:ViewpizzaComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"logout",
    component:LogoutComponent

  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'order',
    component:OrderComponent,
    canActivate:[securityGuard]
  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
