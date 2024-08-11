import { Component } from '@angular/core';
import Products from './../../../assets/data/product-data.json';

export interface Product {
  productImage: string;
  stockCount: number;
  productName: string;
  productPrice: number;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  public Products: Product[] = Products;
  
  ngOnInit(): void {
    this.Products = Products.map((product:any) => ({
      productImage: product.productImage,
      stockCount: Number(product.stockCount),
      productName: product.productName,
      productPrice: Number(product.productPrice)
    }));
    console.log(this.Products);
  }
}
