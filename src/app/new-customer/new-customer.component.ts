import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {

  constructor(private service:ProductService) {}

  customerForm = new FormGroup({
    customerID: new FormControl('', Validators.required),
    customerName: new FormControl(''),
    addressID: new FormControl('')
  })

  onSubmit(){
    console.log(this.customerForm.value);
    this.service.createCustomer(this.customerForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}
