import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductElement } from '../interfaces/ProductElement';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['brandName','colorName','styleName']
  //I was getting this error: Member 'dataSource' implicitly has an 'any' type.
  //I fixed it by adding  noImplicitAny": false in the tsconfig.json file.
  //Solution found in: https://stackoverflow.com/questions/37032857/error-ts7008-member-summary-implicitly-has-an-any-type
  dataSource;

  constructor(private service:ProductService){}
  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<ProductElement>(data as ProductElement[]);
    })
  }
}
