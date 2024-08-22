import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productImage: string;
  @Input() stockCount: number;
  @Input() productName: string;
  @Input() productPrice: number;
  @Input() productId: number;
  @Input() sizes: string[];

  constructor(private router : Router){

  }

  navigateToProduct(productId : number){
    this.router.navigate(['/product-page', productId]);
  }
}
