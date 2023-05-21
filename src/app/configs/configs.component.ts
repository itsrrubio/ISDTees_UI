import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigElement } from '../interfaces/ConfigElement';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit  {
  displayedColumns: string[] = ['ConfigName','ConfigValue','ConfigDescription']
  dataSource;
  
  constructor(private service:ProductService) {}

  ngOnInit() {
    this.service.getAllConfigs().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<ConfigElement>(data as ConfigElement[]);
    })
  }
}
