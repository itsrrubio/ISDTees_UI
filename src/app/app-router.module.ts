import { RouterModule, Routes } from "@angular/router";

//component
import { ProductsComponent } from "./products/products.component";
import { ConfigsComponent } from "./configs/configs.component";
import { CustomersComponent } from "./customers/customers.component";
import { LineitemsComponent } from "./lineitems/lineitems.component";
import { OrdersComponent } from "./orders/orders.component";
import { SpecsComponent } from "./specs/specs.component";
import { StylesComponent } from "./styles/styles.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { NewConfigComponent } from "./new-config/new-config.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { NewLineitemComponent } from "./new-lineitem/new-lineitem.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { NewSpecComponent } from "./new-spec/new-spec.component";
import { NewStyleComponent } from "./new-style/new-style.component";

import { DeleteProductComponent } from "./delete-product/delete-product.component";
import { NgModule } from "@angular/core";


//route
const routes: Routes = [
    {path: '', component : ProductsComponent},
    {path:'products', component : ProductsComponent},
    {path:'configs', component : ConfigsComponent},
    {path:'customers', component : CustomersComponent},
    {path:'lineitems', component : LineitemsComponent},
    {path:'orders', component : OrdersComponent},
    {path:'specs', component : SpecsComponent},
    {path:'styles', component : StylesComponent}, 
    {path:'new-product', component : NewProductComponent}, 
    {path:'new-config', component : NewConfigComponent},
    {path:'new-customer', component : NewCustomerComponent},
    {path:'new-lineitem', component : NewLineitemComponent},
    {path:'new-order', component : NewOrderComponent},
    {path:'new-spec', component : NewSpecComponent},
    {path:'new-style', component : NewStyleComponent}, 

    {path:'delete-product/:id', component : DeleteProductComponent},  
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export  class AppRouterModule{}