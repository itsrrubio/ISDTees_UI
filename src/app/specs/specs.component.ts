import { Component , OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { SpecElement } from '../interfaces/SpecElement';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
  displayedColumns: string[] = ['SpecID','SizeName','SizeOrder',
  'SpecName','Value','styleID']
  dataSource;
  
  constructor(private service:ProductService){}

  ngOnInit() {
    this.service.getAllSpecs().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<SpecElement>(data as SpecElement[]);
    })
  }
}
