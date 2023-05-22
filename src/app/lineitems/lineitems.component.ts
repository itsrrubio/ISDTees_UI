import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { LineitemElement } from '../interfaces/LineitemElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLineitemComponent } from '../update-lineitem/update-lineitem.component';

@Component({
  selector: 'app-lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})
export class LineitemsComponent implements OnInit {

  displayedColumns: string[] = ['LineItemID','ProductID','Description','Price', 'OrderID', 'Quantity', 'Order_Id','Product_Id','Actions']
  dataSource;
  
  constructor(private service:ProductService, 
    private dialog:MatDialog){}

  ngOnInit() {
    this.service.getAllLineitems().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<LineitemElement>(data as LineitemElement[]);
    })
  }

  updateLineitem(lineitem){
    console.log(lineitem);
    this.dialog.open(UpdateLineitemComponent, {
      data:{
        Id:lineitem.Id,
        lineItemID:lineitem.LineItemID,
        productID:lineitem.ProductID,
        description:lineitem.Description,
        price:lineitem.Price,
        orderID:lineitem.OrderID,
        quantity:lineitem.Quantity,
        order_Id:lineitem.Order_Id,
        product_Id:lineitem.Product_Id
      }
    })
  }
}
