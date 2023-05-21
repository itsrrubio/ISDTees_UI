import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  constructor(private service:ProductService) {}

  orderForm = new FormGroup({
    orderNo: new FormControl('', Validators.required),
    orderName: new FormControl(''),
    customerID: new FormControl(''),
    contactName: new FormControl(''),
    orderDate: new FormControl(''),
    orderNotes: new FormControl(''),
    subTotal: new FormControl(''),
    tax: new FormControl(''),
    total: new FormControl(''),
    customer_Id: new FormControl(''),
  })
  
  onSubmit(){
    console.log(this.orderForm.value);
    this.service.createOrder(this.orderForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}
