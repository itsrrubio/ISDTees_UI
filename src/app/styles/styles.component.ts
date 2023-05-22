import { Component  , OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { StyleElement } from '../interfaces/StyleElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStyleComponent } from '../update-style/update-style.component';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {

  displayedColumns: string[] = ['StyleID','PartNumber','BrandName',
  'StyleName','UniquestyleName','Title','BaseCategory','ComparableGroup','CompanionGroup','Actions']
  dataSource;
  
  constructor(private service:ProductService, 
    private dialog:MatDialog){}

  ngOnInit() {
    this.service.getAllStyles().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<StyleElement>(data as StyleElement[]);
    })
  }

  updateStyle(style){
    console.log(style);
    this.dialog.open(UpdateStyleComponent, {
      data:{
        Id:style.Id,
        StyleID:style.StyleID,
        PartNumber:style.PartNumber,
        BrandName:style.BrandName,
        StyleName:style.StyleName,
        UniquestyleName:style.UniquestyleName,
        Title:style.Title,
        BaseCategory:style.BaseCategory,
        ComparableGroup:style.ComparableGroup,
        CompanionGroup:style.CompanionGroup
      }
    })
  }
}
