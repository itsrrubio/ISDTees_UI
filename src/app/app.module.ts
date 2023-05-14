import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import { ProductService } from './product.service';
import { AppRouterModule } from './app-router.module';
import {HttpClientModule } from '@angular/common/http';
//This was imported when Material Design was installed
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { NewProductComponent } from './new-product/new-product.component';

//forms
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    HeaderComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //The import below is for Material Design
    BrowserAnimationsModule, MatButtonModule, MatTableModule, MatInputModule, 
    MatCardModule, 
    MatSelectModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
