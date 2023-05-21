import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-style',
  templateUrl: './new-style.component.html',
  styleUrls: ['./new-style.component.css']
})
export class NewStyleComponent {
  constructor(private service:ProductService) {}

  styleForm = new FormGroup({
    styleID: new FormControl('', Validators.required),
    partNumber: new FormControl(''),
    brandName: new FormControl(''),
    styleName: new FormControl(''),
    uniquestyleName: new FormControl(''),
    title: new FormControl(''),
    baseCategory: new FormControl(''),
    comparableGroup: new FormControl(''),
    companionGroup: new FormControl(''),
  })

  onSubmit(){
    console.log(this.styleForm.value);
    this.service.createStyle(this.styleForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}
