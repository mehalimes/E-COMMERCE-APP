import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Products from './../../../assets/data/product-data.json';
import { Product } from '../container/container.component';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-product-page-container',
  templateUrl: './product-page-container.component.html',
  styleUrl: './product-page-container.component.css',
})
export class ProductPageContainerComponent implements OnInit, AfterViewInit {
  Products: Product[] = Products;

  productId: number;
  currentProduct: Product;
  productSize: string = 'S';
  productQuantity: number = 1;

  isPopUpVisible: boolean = false;

  @ViewChild('productQuantityRef') input: ElementRef;
  @ViewChild('decrementButtonRef') decrementButton: ElementRef;
  @ViewChild('addCartButton') addCartButton: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private sharedStateService : SharedStateService
  ) 
  {

  }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.Products.forEach((item) => {
      if (Number(item.productId) === this.productId) {
        this.currentProduct = item;
        console.log(this.currentProduct);
      }
    });

    this.sharedStateService.isPopUpVisible$.subscribe(isVisible => {
      this.isPopUpVisible = isVisible;
    });
  }

  ngAfterViewInit(){
    
  }

  isPositiveNumber(num: number): boolean {
    return !Number.isNaN(num) && Number(num) > 0;
  }

  increment(): void {
    this.decrementButton.nativeElement.style.cursor = 'pointer';
    this.productQuantity += 1;
  }

  decrement(): void {
    if (this.productQuantity === 1) {
      this.decrementButton.nativeElement.style.cursor = 'not-allowed';
      return;
    }
    this.productQuantity -= 1;
  }

  productQuantityFocus(): void {
    this.input.nativeElement.style.transform = 'scale(1.3)';
    this.input.nativeElement.style.border = '2px solid gray';
    this.input.nativeElement.style.color = 'black';
    this.input.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }

  productQuantityFocusOut(): void {
    this.input.nativeElement.style.transform = 'scale(1)';
    this.input.nativeElement.style.border = 'none';
    this.input.nativeElement.style.color = 'black';
  }

  productQuantityChange(): void {
    if (this.isPositiveNumber(this.productQuantity)) {
      this.productQuantity = Number(this.productQuantity);
    } else {
      this.productQuantity = 1;
    }
  }

  addCart(): void {
    this.sharedStateService.setPopUpVisibleState(true);
  }
}