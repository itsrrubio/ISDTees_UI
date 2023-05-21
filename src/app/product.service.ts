import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:64653/api/products'
  baseUrl2: string = 'http://localhost:64653/api'

  constructor(private http: HttpClient) { }

   //PRODUCT METHODS
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

  //CUSTOMER METHODS
  getAllCustomers(){
    return this.http.get(this.baseUrl2+'/customers');
  }

  //CONFIG METHODS
  getAllConfigs(){
    return this.http.get(this.baseUrl2+'/configs');
  }

  //ORDER METHODS
  getAllOrders(){
    return this.http.get(this.baseUrl2+'/orders');
  }

  //LINE ITEM METHODS
  getAllLineitems(){
    return this.http.get(this.baseUrl2+'/lineitems');
  }

  //SPECS METHODS
  getAllSpecs(){
    return this.http.get(this.baseUrl2+'/specs');
  }

  //STYLE METHODS
  getAllStyles(){
    return this.http.get(this.baseUrl2+'/styles');
  }
}
