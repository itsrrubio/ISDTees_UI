import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { LineitemElement } from '../interfaces/LineitemElement';

@Component({
  selector: 'app-lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})
export class LineitemsComponent implements OnInit {

  displayedColumns: string[] = ['LineItemID','ProductID','Description','Price', 'OrderID', 'Quantity', 'Order_Id','Product_Id']
  dataSource;
  
  constructor(private service:ProductService){}

  ngOnInit() {
    this.service.getAllLineitems().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<LineitemElement>(data as LineitemElement[]);
    })
  }

}
