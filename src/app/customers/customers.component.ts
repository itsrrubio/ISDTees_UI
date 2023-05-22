import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerElement } from '../interfaces/CustomerElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnInit {

  displayedColumns: string[] = ['CustomerID','CustomerName','AddressID','Actions']
  dataSource;
  
  constructor(private service:ProductService, 
    private dialog:MatDialog) {}

  ngOnInit() {
      this.service.getAllCustomers().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<CustomerElement>(data as CustomerElement[]);
    })
  }
  
  updateCustomer(customer){
    console.log(customer);
    this.dialog.open(UpdateCustomerComponent, {
      data:{
        Id: customer.Id,
        customerID:customer.CustomerID,
        customerName:customer.CustomerName,
        addressIDn:customer.AddressID
      }
    })
  }
}
