import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/content-layout/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/content-layout/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./layout/content-layout/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./layout/content-layout/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./layout/content-layout/user/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'user/create',
    loadChildren: () => import('./layout/content-layout/user/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./layout/content-layout/user/form/form.module').then((m) => m.FormModule),
  },
  { path: 'order', loadChildren: () => import('./layout/content-layout/order/order.module').then(m => m.OrderModule) },
  { path: 'order-detail', loadChildren: () => import('./layout/content-layout/order-detail/order-detail.module').then(m => m.OrderDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
