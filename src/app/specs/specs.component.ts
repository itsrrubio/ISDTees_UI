import { Component , OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { SpecElement } from '../interfaces/SpecElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSpecComponent } from '../update-spec/update-spec.component';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
  displayedColumns: string[] = ['SpecID','SizeName','SizeOrder',
  'SpecName','Value','styleID','Actions']
  dataSource;
  
  constructor(private service:ProductService, 
    private dialog:MatDialog){}

  ngOnInit() {
    this.service.getAllSpecs().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<SpecElement>(data as SpecElement[]);
    })
  }

  updateSpec(spec){
    console.log(spec);
    this.dialog.open(UpdateSpecComponent, {
      data:{
        Id:spec.Id,
        OrderNo:spec.SpecID,
        OrderName:spec.SizeName,
        CustomerID:spec.SizeOrder,
        ContactName:spec.SpecName,
        OrderDate:spec.Value,
        OrderNotes:spec.styleID
      }
    })
  }
}
