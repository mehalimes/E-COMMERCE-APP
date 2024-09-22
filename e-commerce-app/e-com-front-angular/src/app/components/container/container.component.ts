import { Component } from '@angular/core';
import Products from './../../../assets/data/product-data.json';
import { Product } from "./../../interfaces/product";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  Products: Product[] = Products;
  
  ngOnInit(): void {
    this.Products = Products.map((product:any) => ({
      productImage: product.productImage,
      stockCount: Number(product.stockCount),
      productName: product.productName,
      productPrice: Number(product.productPrice),
      sizes: product.sizes,
      productId: product.productId
    }));
  }
}
