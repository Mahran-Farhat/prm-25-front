import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='http://localhost:8082/prm/products';

  constructor(private http:HttpClient){

  }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<void>(this.baseUrl+"?id="+id);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+"/get?id="+id);
  }

   updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(this.baseUrl+"?id="+id,product);
  }

  seachProducts(category:String,text:String):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"/search?category="+category+"&text="+text);
  }
}
