import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.getProducts();
  }
    
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products.slice(1, 5));
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.productService.addProduct({ name } as Product)
    .subscribe(product => {
      this.products.push(product);
    });
}
}
