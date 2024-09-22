import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent {
  @Input() className?: string = "";

  isClassNamePassed: boolean = false;
  productQuantity: number = 1;

  @ViewChild('decrementButtonRef') decrementButton: ElementRef;
  @ViewChild('productQuantityRef') input : ElementRef;

  decrement(): void {
    if (this.productQuantity === 1) {
      this.decrementButton.nativeElement.style.cursor = 'not-allowed';
      return;
    }
    this.productQuantity -= 1;
  }

  increment(): void {
    this.decrementButton.nativeElement.style.cursor = 'pointer';
    this.productQuantity += 1;
  }

  isPositiveNumber(num: number): boolean {
    return !Number.isNaN(num) && Number(num) > 0;
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
}
