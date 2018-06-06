import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product }         from '../product';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  styleUrls: ['./product-detailed.component.css']
})
export class ProductDetailedComponent implements OnInit {
@Input() product: Product;
  constructor(private route: ActivatedRoute,
  private productService: ProductService,
  private location: Location) { }

  ngOnInit() {
  let id = +this.route.snapshot.paramMap.get('id');
  if(id!=0){
  this.getProduct();
  }
  }

getProduct(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id)
    .subscribe(product => this.product = product);
}
goBack(): void {
  this.location.back();
}
saved(): void{
	
}

save(): void {
   this.productService.updateProduct(this.product)
     .subscribe(() => this.saved());
 }
}
