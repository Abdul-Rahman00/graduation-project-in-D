import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderMasterComponent } from './order-master/order-master.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'/home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'product',component:AllProductsComponent},
        {path:'productsList',component:ProductListComponent},
        {path:'productInfo/:pid',component:ProductDetailsComponent},    
        {path:'order',component:OrderMasterComponent},
    ]},
    {path:'login',component:LoginComponent}
];
