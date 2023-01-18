import { HomepageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const router: Routes = [
  { path: '', component: HomepageComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
