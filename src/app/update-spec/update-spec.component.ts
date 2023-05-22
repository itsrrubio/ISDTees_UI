import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-spec',
  templateUrl: './update-spec.component.html',
  styleUrls: ['./update-spec.component.css']
})
export class UpdateSpecComponent {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateSpecComponent>,
              @Inject(MAT_DIALOG_DATA){SpecID, SizeName, 
                SizeOrder, SpecName, Value, styleID, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    SpecID: [SpecID, Validators.required], 
                    SizeName: [SizeName], 
                    SizeOrder: [SizeOrder], 
                    SpecName: [SpecName], 
                    Value: [Value], 
                    styleID: [styleID], 
                  })
              }

    close(){
      //console.log("close clicked");
      this.dialogRef.close();
    }
  
    save(){
      //console.log("save clicked"); 
      this.form.value.id = this.id;
      this.service.updateSpec(this.id, this.form.value).subscribe((data)=> {
        console.log('Data: ', data);
      })

    }

  ngOnInit() {
  }
}
