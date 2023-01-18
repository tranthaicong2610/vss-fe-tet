import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ProductComponent } from "./product/product.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { SuggestedProductComponent } from './suggested-product/suggested-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListComponent } from './product/list/list.component';

@NgModule({
    declarations: [HomepageComponent,ProductComponent,ProductsComponent,SuggestedProductComponent,ProductDetailComponent, ListComponent],
    imports: [CommonModule, HomepageRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ]
})
export class HomepageModule {}
