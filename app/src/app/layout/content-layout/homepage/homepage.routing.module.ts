import { HomepageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [{ path: '', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
