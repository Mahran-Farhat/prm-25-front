import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
@Component({
  selector: 'app-add-project',
  imports: [FormsModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {

  p:Product = new Product();

  result="";

  name="";

  ngOnInit() {
    this.result="mes étudiants de 2 AWI.";
    this.name= "mes étudiants de 2 AWI.";
    this.p = new Product();
   }

direBonjour(r:string): void {
  this.result = r;
//alert('Bonjour '+this.result);
}

}
