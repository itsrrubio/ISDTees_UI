import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-new-spec',
  templateUrl: './new-spec.component.html',
  styleUrls: ['./new-spec.component.css']
})
export class NewSpecComponent {
  constructor(private service:ProductService) {}

  specForm = new FormGroup({
    specID: new FormControl('', Validators.required),
    sizeName: new FormControl(''),
    sizeOrder: new FormControl(''),
    specName: new FormControl(''),
    value: new FormControl(''),
    styleID: new FormControl(''),
  })

  onSubmit(){
    console.log(this.specForm.value);
    this.service.createSpec(this.specForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}