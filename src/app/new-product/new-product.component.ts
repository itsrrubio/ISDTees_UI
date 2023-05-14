import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  constructor()  {}
  productForm = new FormGroup({
    brandName: new FormControl(''),
    colorName: new FormControl(''),
    styleName: new FormControl('')
  })
}
