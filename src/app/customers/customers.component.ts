import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerElement } from '../interfaces/CustomerElement';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnInit {

  displayedColumns: string[] = ['CustomerID','CustomerName','AddressID']
  dataSource;
  
  constructor(private service:ProductService) {}

  ngOnInit() {
      this.service.getAllCustomers().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<CustomerElement>(data as CustomerElement[]);
    })
  }

}
