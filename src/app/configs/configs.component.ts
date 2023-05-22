import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigElement } from '../interfaces/ConfigElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateConfigComponent } from '../update-config/update-config.component';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.css']
})
export class ConfigsComponent implements OnInit  {
  displayedColumns: string[] = ['ConfigName','ConfigValue','ConfigDescription','Actions']
  dataSource;
  
  constructor(private service:ProductService, 
    private dialog:MatDialog) {}

  ngOnInit() {
    this.service.getAllConfigs().subscribe((data) => {
      console.log('Result - ' , data);
      this.dataSource = new MatTableDataSource<ConfigElement>(data as ConfigElement[]);
    })
  }

  updateConfig(config){
    console.log(config);
    this.dialog.open(UpdateConfigComponent, {
        data:{
          Id: config.Id,
          ConfigName:config.ConfigName,
          ConfigValue:config.ConfigValue,
          ConfigDescription:config.ConfigDescription
        }
    })
  }
  
}
