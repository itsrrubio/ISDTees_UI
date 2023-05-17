import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product = {
    brandName:'',
    colorName:'red',
    styleName:'X'
  }
  id;

  constructor(private route:ActivatedRoute, 
              private service:ProductService,
              private router:Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(this.id).subscribe((data:any) => {
      console.log(data);
      this.product.brandName = data.BrandName;
      this.product.colorName = data.ColorName;
      this.product.styleName = data.StyleName;
    })
  }

  cancel(){
   this.router.navigate(['/']);
  }

  confirm(){
    this.service.deleteProduct(this.id).subscribe((data)=>{
      console.log(data);
    })
  }
}