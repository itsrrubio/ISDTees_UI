import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-new-lineitem',
  templateUrl: './new-lineitem.component.html',
  styleUrls: ['./new-lineitem.component.css']
})
export class NewLineitemComponent {
  constructor(private service:ProductService) {}

  lineitemForm = new FormGroup({
    LineItemID: new FormControl('', Validators.required),
    productID: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    orderID: new FormControl(''),
    quantity: new FormControl(''),
    order_Id: new FormControl(''),
    product_Id: new FormControl(''),
  })

  onSubmit(){
    console.log(this.lineitemForm.value);
    this.service.createLineitem(this.lineitemForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}
