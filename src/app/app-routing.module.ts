import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'seller-home', component: SellerHomeComponent},
  { path: 'seller-add-product', component: SellerAddProductComponent},
  { path: 'seller-update-product/:id', component: SellerUpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
