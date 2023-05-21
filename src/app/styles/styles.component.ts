import { Component  , OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { StyleElement } from '../interfaces/StyleElement';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {

  displayedColumns: string[] = ['StyleID','PartNumber','BrandName',
  'StyleName','UniquestyleName','Title','BaseCategory','ComparableGroup','CompanionGroup']
  dataSource;
  
  constructor(private service:ProductService){}

  ngOnInit() {
    this.service.getAllStyles().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<StyleElement>(data as StyleElement[]);
    })
  }
}