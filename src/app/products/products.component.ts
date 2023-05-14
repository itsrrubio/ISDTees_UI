import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductElement } from '../interfaces/ProductElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['brandName','colorName','styleName','Actions']
  //I was getting this error: Member 'dataSource' implicitly has an 'any' type.
  //I fixed it by adding  noImplicitAny": false in the tsconfig.json file.
  //Solution found in: https://stackoverflow.com/questions/37032857/error-ts7008-member-summary-implicitly-has-an-any-type
  dataSource;

  constructor(private service:ProductService, 
              private dialog:MatDialog){ }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<ProductElement>(data as ProductElement[]);
    })
  }

  updateProduct(product){
    console.log(product);
    this.dialog.open(UpdateProductComponent, {
      data: {
        BrandName: product.brandName,
        ColorName: product.colorName,
        StyleName: product.styleName
      }
    })
  }
}
