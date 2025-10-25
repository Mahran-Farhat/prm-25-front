import { Component } from '@angular/core';
import { Product } from '../../models/product';
import {ProductService} from '../../services/productService';
import { error } from 'console';

@Component({
  selector: 'app-list-projects',
  imports: [],
  templateUrl: './list-projects.html',
  styleUrl: './list-projects.css'
})
export class ListProjects {

  products:Product[]=[];

  constructor(private productService:ProductService){}

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

}
