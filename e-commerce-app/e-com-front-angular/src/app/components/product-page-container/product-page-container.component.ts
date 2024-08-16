import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-page-container',
  templateUrl: './product-page-container.component.html',
  styleUrl: './product-page-container.component.css',
})
export class ProductPageContainerComponent {
  public imageUrl: string = './../../../assets/images/mug.webp';
  public productQuantity: number = 1;
  public isAdded: boolean = true;
  @ViewChild('productQuantityRef') input: ElementRef;

  private isPositiveNumber(num: number): boolean {
    return !Number.isNaN(num) && Number(num) > 0;
  }

  public increment(): void {
    this.productQuantity += 1;
  }

  public decrement(): void {
    if (this.productQuantity === 1) {
      return;
    }
    this.productQuantity -= 1;
  }

  public productQuantityFocus(): void {
    this.input.nativeElement.style.transform = 'scale(1.3)';
    this.input.nativeElement.style.border = '2px solid gray';
    this.input.nativeElement.style.opacity = '0.7';
    this.input.nativeElement.style.color = 'black';
  }

  public productQuantityFocusOut(): void {
    this.input.nativeElement.style.transform = 'scale(1)';
    this.input.nativeElement.style.border = 'none';
    this.input.nativeElement.style.opacity = '1';
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
    this.isAdded = false;
    setTimeout(() => {
      console.log("bekleniyor");
      this.isAdded = true;
    }, 1000*3);
  }
}
