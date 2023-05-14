import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})

export class NewProductComponent {
  
  constructor(private service:ProductService)  {}

  productForm = new FormGroup({
    brandName: new FormControl('', Validators.required),
    colorName: new FormControl('', Validators.required),
    styleName: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.productForm.value);
    this.service.createProduct(this.productForm.value).subscribe((data) => {
      console.log('Data - ', data)
    })
  }
}
