import { Component, OnInit, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-style',
  templateUrl: './update-style.component.html',
  styleUrls: ['./update-style.component.css']
})
export class UpdateStyleComponent {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateStyleComponent>,
              @Inject(MAT_DIALOG_DATA){StyleID, PartNumber, 
                BrandName,StyleName, UniquestyleName, Title, BaseCategory,
                ComparableGroup, CompanionGroup, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    styleID: [StyleID, Validators.required], 
                    partNumber: [PartNumber], 
                    brandName: [BrandName], 
                    styleName: [StyleName], 
                    uniquestyleName: [UniquestyleName], 
                    title: [Title], 
                    baseCategory: [BaseCategory], 
                    comparableGroup: [ComparableGroup], 
                    companionGroup: [CompanionGroup], 
                  })
              }

  close(){
    //console.log("close clicked");
    this.dialogRef.close();
  }

  save(){
    //console.log("save clicked"); 
    this.form.value.id = this.id;
    this.service.updateStyle(this.id, this.form.value).subscribe((data)=> {
      console.log('Data: ', data);
    })
  
  }
  
  ngOnInit() {
  }
}
