import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-project',
  imports: [FormsModule],
  templateUrl: './update-project.html',
  styleUrl: './update-project.css'
})
export class UpdateProject {

  productId!:number;
  p!:Product;
  
  constructor(private productService:ProductService, 
    private router : Router,
    private route:ActivatedRoute){
  }

  ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.productId).subscribe(
      {next : data => this.p = data,
      error :err => console.log('Error loading product with id : '+this.productId)
  });
  }

  saveProduct(){

    this.productService.updateProduct(this.productId,this.p).subscribe(
      {
        next : data => this.router.navigate(['/products'])
        ,
        error: err => console.log('Error updating product with id :'+this.productId),
      }
    );

  }

}
