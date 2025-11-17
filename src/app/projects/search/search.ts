import { Component } from '@angular/core';
import { ProductService } from '../../services/productService';
import { Product } from '../../models/product';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  text:String='Product name';
  category:String='----';

  products:Product[]=[];

  constructor(private productService:ProductService){}

  ngOnInit(){
  this.text = 'Product name';
  this.category ='----';
  this.products=[];
  }

  onSubmit():void{
    this.productService.seachProducts(this.category,this.text).subscribe(
      {next : data => this.products = data,
      error : err => console.log('Error featching products'+err)
      });
  }

  update(id:number){  }

  delete(id:number){  }

}
