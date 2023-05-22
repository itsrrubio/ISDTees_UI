import { Component, OnInit, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateOrderComponent>,
              @Inject(MAT_DIALOG_DATA){OrderNo, OrderName, 
                CustomerID, ContactName, OrderDate, 
                OrderNotes, SubTotal, Tax,Total, Customer_Id, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    OrderNo: [OrderNo, Validators.required], 
                    OrderName: [OrderName], 
                    CustomerID: [CustomerID], 
                    ContactName: [ContactName], 
                    OrderDate: [OrderDate], 
                    OrderNotes: [OrderNotes], 
                    SubTotal: [SubTotal], 
                    Tax: [Tax], 
                    Total: [Total], 
                    Customer_Id: [Customer_Id], 
                  })
              }

              close(){
                //console.log("close clicked");
                this.dialogRef.close();
              }
            
    save(){
      //console.log("save clicked"); 
      this.form.value.id = this.id;
      this.service.updateOrder(this.id, this.form.value).subscribe((data)=> {
        console.log('Data: ', data);
      })
    }
  ngOnInit() {
  }
}
