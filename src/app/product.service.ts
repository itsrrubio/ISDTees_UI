import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:64653/api/products'

  constructor(private http: HttpClient) { }

  getProduct(id){
      return this.http.get(this.baseUrl+'/'+id);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  createProduct(product){
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(id, product){
    return this.http.put(this.baseUrl+'/'+id, product);
  }

  deleteProduct(id){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
