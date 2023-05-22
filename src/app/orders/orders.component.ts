import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrderElement } from '../interfaces/OrderElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateOrderComponent } from '../update-order/update-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['OrderNo','OrderName','CustomerID',
                                'ContactName','OrderDate','OrderNotes',
                                'SubTotal', 'Tax','Total','Customer_Id','Actions']
  dataSource;

  constructor(private service:ProductService, 
    private dialog:MatDialog) {}

  ngOnInit() {
      this.service.getAllOrders().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<OrderElement>(data as OrderElement[]);
    })
  }

  updateOrder(order){
    console.log(order);
    this.dialog.open(UpdateOrderComponent, {
      data:{
        Id:order.Id,
        OrderNo:order.OrderNo,
        OrderName:order.OrderName,
        CustomerID:order.CustomerID,
        ContactName:order.ContactName,
        OrderDate:order.OrderDate,
        OrderNotes:order.OrderNotes,
        SubTotal:order.SubTotal,
        Tax:order.Tax,
        Total:order.Total,
        Customer_Id:order.Customer_Id
      }
    })
  }
}
