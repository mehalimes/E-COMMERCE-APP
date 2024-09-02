import { Component } from '@angular/core';
import Products from './../../../assets/data/product-data.json';

export interface Product {
  productImage: string;
  stockCount: number;
  productName: string;
  productPrice: number;
  productId: number;
  sizes: string[];
}

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
