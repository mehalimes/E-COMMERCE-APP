import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Products from "./../../../assets/data/product-data.json";
import { Product } from '../container/container.component';

@Component({
  selector: 'app-product-page-container',
  templateUrl: './product-page-container.component.html',
  styleUrl: './product-page-container.component.css',
})
export class ProductPageContainerComponent implements OnInit {
  public Products : Product[] = Products;

  public productId : number;
  public currentProduct : Product;
  public productSize: string = 'S';

  public productQuantity: number = 1;
  @ViewChild('productQuantityRef') input: ElementRef;
  @ViewChild('decrementButtonRef') decrementButton : ElementRef;

  constructor(private route : ActivatedRoute) {

  }

  public ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.Products.forEach((item, index, array) => {
      if(Number(item.productId) === this.productId){
        this.currentProduct = item;
        console.log(this.currentProduct);
      }
    });
  }

  private isPositiveNumber(num: number): boolean {
    return !Number.isNaN(num) && Number(num) > 0;
  }

  public increment(): void {
    this.decrementButton.nativeElement.style.cursor = 'pointer';
    this.productQuantity += 1;
  }

  public decrement(): void {
    if (this.productQuantity === 1) {
      this.decrementButton.nativeElement.style.cursor = 'not-allowed';
      return;
    }
    this.productQuantity -= 1;
  }

  public productQuantityFocus(): void {
    this.input.nativeElement.style.transform = 'scale(1.3)';
    this.input.nativeElement.style.border = '2px solid gray';
    this.input.nativeElement.style.color = 'black';
    this.input.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }

  public productQuantityFocusOut(): void {
    this.input.nativeElement.style.transform = 'scale(1)';
    this.input.nativeElement.style.border = 'none';
    this.input.nativeElement.style.color = 'black';
  }

  public productQuantityChange(): void {
    if (this.isPositiveNumber(this.productQuantity)) {
      this.productQuantity = Number(this.productQuantity);
    } else {
      this.productQuantity = 1;
    }
  }

  public addCart(): void {
    console.log("Helllo");
  }
}
