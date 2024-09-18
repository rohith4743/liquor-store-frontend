import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

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
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    }
    
];
