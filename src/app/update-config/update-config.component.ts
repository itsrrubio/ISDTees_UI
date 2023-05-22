import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-config',
  templateUrl: './update-config.component.html',
  styleUrls: ['./update-config.component.css']
})
export class UpdateConfigComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateConfigComponent>,
              @Inject(MAT_DIALOG_DATA){ConfigName, ConfigValue, 
                ConfigDescription, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    configName: [ConfigName, Validators.required], 
                    configValue: [ConfigValue], 
                    configDescription: [ConfigDescription], 
                  })
              }

    close(){
      //console.log("close clicked");
      this.dialogRef.close();
    }
  
    save(){
      //console.log("save clicked"); 
      this.form.value.id = this.id;
      this.service.updateConfig(this.id, this.form.value).subscribe((data)=> {
        console.log('Data: ', data);
      })
  
    }
            
  ngOnInit() {
  }
}
