import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateProductComponent>,
              @Inject(MAT_DIALOG_DATA){BrandName, ColorName, StyleName, Id},
              private service:ProductService) {
                this.id = Id;

                this.form = fb.group({
                  brandName: [BrandName, Validators.required],
                  colorName: [ColorName, Validators.required],
                  styleName: [StyleName, Validators.required],
                })
              }

  close(){
    //console.log("close clicked");
    this.dialogRef.close();
  }

  save(){
    //console.log("save clicked"); 
    this.form.value.id = this.id;
    this.service.updateProduct(this.id, this.form.value).subscribe((data)=> {
      console.log('Data: ', data);
    })
  }



  ngOnInit() {

  }
}
