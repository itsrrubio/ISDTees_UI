import { RouterModule, Routes } from "@angular/router";

//component
import { ProductsComponent } from "./products/products.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { NgModule } from "@angular/core";
import { DeleteProductComponent } from "./delete-product/delete-product.component";

//route
const routes: Routes = [
    {path: '', component : ProductsComponent},
    {path:'products', component : ProductsComponent},
    {path:'new-product', component : NewProductComponent}, 
    {path:'delete-product/:id', component : DeleteProductComponent},   
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export  class AppRouterModule{}