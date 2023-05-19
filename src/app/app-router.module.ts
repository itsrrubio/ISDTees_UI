import { RouterModule, Routes } from "@angular/router";

//component
import { ProductsComponent } from "./products/products.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { NgModule } from "@angular/core";
import { DeleteProductComponent } from "./delete-product/delete-product.component";

import { ConfigsComponent } from "./configs/configs.component";
import { CustomersComponent } from "./customers/customers.component";
import { LineitemsComponent } from "./lineitems/lineitems.component";
import { OrdersComponent } from "./orders/orders.component";
import { SpecsComponent } from "./specs/specs.component";
import { StylesComponent } from "./styles/styles.component";

//route
const routes: Routes = [
    {path: '', component : ProductsComponent},
    {path:'products', component : ProductsComponent},
    {path:'new-product', component : NewProductComponent}, 
    {path:'delete-product/:id', component : DeleteProductComponent}, 
    {path:'configs', component : ConfigsComponent},
    {path:'customers', component : CustomersComponent},
    {path:'lineitems', component : LineitemsComponent},
    {path:'orders', component : OrdersComponent},
    {path:'specs', component : SpecsComponent},
    {path:'styles', component : StylesComponent},  
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export  class AppRouterModule{}