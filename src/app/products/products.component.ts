import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  selectedProduct: Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.getProducts();
  }
    onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  

delete(product: Product): void {
  this.products = this.products.filter(h => h !== product);
  this.productService.deleteProduct(product).subscribe();
}

}