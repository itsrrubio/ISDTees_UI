import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateCustomerComponent>,
              @Inject(MAT_DIALOG_DATA){CustomerID, CustomerName, 
                AddressID, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    customerID: [CustomerID, Validators.required], 
                    customerName: [CustomerName], 
                    cddressID: [AddressID], 
                  })
              }

    close(){
      //console.log("close clicked");
      this.dialogRef.close();
    }
  
    save(){
      //console.log("save clicked"); 
      this.form.value.id = this.id;
      this.service.updateCustomer(this.id, this.form.value).subscribe((data)=> {
        console.log('Data: ', data);
      })

    }
  ngOnInit() {
  }
}

