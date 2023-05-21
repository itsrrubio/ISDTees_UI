import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private service:ProductService) {}

  ngOnInit() {
      this.service.getAllCustomers().subscribe((data) => {
      console.log('Result - ' , data);
    })
  }

}
