import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch : "full"
    },
    {
        path : "home",
        component : HomeComponent,
        title : "Sked Home"
    },
    { 
        path: 'product/:id', 
        component: ProductPageComponent 
    }
    
];
