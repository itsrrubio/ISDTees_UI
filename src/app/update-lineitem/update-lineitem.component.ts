import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-lineitem',
  templateUrl: './update-lineitem.component.html',
  styleUrls: ['./update-lineitem.component.css']
})
export class UpdateLineitemComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateLineitemComponent>,
              @Inject(MAT_DIALOG_DATA){LineItemID, ProductID, 
                Description, Price, OrderID, Quantity, 
                Order_Id, Product_Id, Id},
                private service:ProductService) {

                  this.id = Id;
                  
                  this.form = fb.group({
                    LineItemID: [LineItemID, Validators.required], 
                    ProductID: [ProductID], 
                    Description: [Description], 
                    Price: [Price], 
                    OrderID: [OrderID], 
                    Quantity: [Quantity], 
                    Order_Id: [Order_Id], 
                    Product_Id: [Product_Id], 
                  })
              }

  close(){
    //console.log("close clicked");
    this.dialogRef.close();
  }

  save(){
    //console.log("save clicked"); 
    this.form.value.id = this.id;
    this.service.updateLineitem(this.id, this.form.value).subscribe((data)=> {
      console.log('Data: ', data);
    })
  }

  ngOnInit() {
  }
}
