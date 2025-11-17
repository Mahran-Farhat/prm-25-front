import { Component } from '@angular/core';
import { Product } from '../../models/product';
import {ProductService} from '../../services/productService';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  imports: [CommonModule],
  templateUrl: './list-projects.html',
  styleUrl: './list-projects.css'
})
export class ListProjects {

  products:Product[]=[];

  constructor(private productService:ProductService, private route:Router){}

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts():void{
    this.productService.getProducts().subscribe(
      {next : data => {
        this.products = data;
        console.log('Products loaded.')
      },
      error : err => console.error('Error loading products',err)
      }
    );
  }

  deleteProduct(id:number):void{
   this.productService.deleteProduct(id).subscribe(
    {next : data => this.route.navigate(['/products'])
    ,
    error: err => console.log('Error delete product with id :'+id)
    }
   );
  }

  updateProduct(id:number):void{
    this.route.navigate(['/update-project',id]);
  }


}
