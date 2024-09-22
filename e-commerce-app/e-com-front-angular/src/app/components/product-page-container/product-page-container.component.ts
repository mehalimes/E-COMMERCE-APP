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

  productSize: string = 'S';
  productQuantity: number = 1;
  cartItems : { [key : number] : number } = {};

  isPopUpVisible: boolean = false;
  
  @ViewChild('addCartButton') addCartButton: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public sharedStateService : SharedStateService
  ) 
  {

  }

  ngOnInit() {
    this.sharedStateService.productId = Number(this.route.snapshot.paramMap.get('productId'));
    Products.forEach(item => {
      if(Number(item.productId) === this.sharedStateService.productId){
        this.sharedStateService.currentProduct = item;
      }
    });
  }

  addCart(): void {
    this.sharedStateService.isPopUpVisible = true;
  }
}