import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-new-config',
  templateUrl: './new-config.component.html',
  styleUrls: ['./new-config.component.css']
})

  export class NewConfigComponent {

  constructor(private service:ProductService) {}

  configForm = new FormGroup({
    configName: new FormControl('', Validators.required),
    configValue: new FormControl(''),
    configDescription: new FormControl('')
  })

  onSubmit(){
      console.log(this.configForm.value);
      this.service.createConfig(this.configForm.value).subscribe((data) => {
      console.log('Data - ', data)
    })

  }
}
