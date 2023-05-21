import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrderElement } from '../interfaces/OrderElement';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['OrderNo','OrderName','CustomerID',
                                'ContactName','OrderDate','OrderNotes',
                                'SubTotal', 'Tax','Total','Customer_Id']
  dataSource;

  constructor(private service:ProductService) {}

  ngOnInit() {
      this.service.getAllOrders().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<OrderElement>(data as OrderElement[]);
    })
  }
}
