import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Products from './../../../assets/data/product-data.json';
import { Product } from './../../interfaces/product';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-product-page-container',
  templateUrl: './product-page-container.component.html',
  styleUrl: './product-page-container.component.css',
})
export class ProductPageContainerComponent implements OnInit {
  Products: Product[] = Products;

  productId: number;
  currentProduct: Product;
  productSize: string = 'S';
  productQuantity: number = 1;
  cartItems : { [key : number] : number } = {};

  isPopUpVisible: boolean = false;
  
  @ViewChild('addCartButton') addCartButton: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private sharedStateService : SharedStateService
  ) 
  {

  }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.sharedStateService.setProductId(this.productId);

      this.sharedStateService.isPopUpVisible$.subscribe(isVisible => {
        this.isPopUpVisible = isVisible;
      })


      this.sharedStateService.productId$.subscribe(productId => {
        this.productId = productId;
      })
  }

  addCart(): void {
    this.sharedStateService.setPopUpVisibleState(true);
  }
}