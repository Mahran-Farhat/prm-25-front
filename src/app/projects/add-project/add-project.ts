import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-add-project',
  imports: [FormsModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {

  p:Product = new Product();

  constructor(private productService:ProductService, private route:Router){}

  ngOnInit() {
    this.p = new Product();
   }

   saveProduct():void{
    this.productService.addProduct(this.p).subscribe({
      next : data => {
        console.log('Product added');
        this.route.navigate(['/products'])
      },
      error : err => console.log('Error save product',err)
    });
   }

}
