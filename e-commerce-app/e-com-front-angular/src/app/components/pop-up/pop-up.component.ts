import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedStateService } from '../../services/shared-state.service';
import { Product } from './../../interfaces/product';
import Products from "./../../../assets/data/product-data.json";
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent implements OnInit {
  isHeaderVisible: boolean = true;
  isPopUpVisible: boolean = false;
  productId: number;
  currentProduct: Product;

  @ViewChild('popUpContainer') popUpContainer: ElementRef;
  @ViewChild('popUpLabel') popUpLabel: ElementRef;

  constructor(
    private router: Router,
    private sharedStateService: SharedStateService
  ) {}
  
  ngOnInit() {

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside: boolean = this.popUpContainer?.nativeElement?.contains(event.target) ?? false;
    const addCartButtonClicked: boolean = (event.target as HTMLElement).classList.contains('add-button');
    
    if(!this.isPopUpVisible && addCartButtonClicked){
      this.sharedStateService.setPopUpVisibleState(true);
    }

    else if(this.isPopUpVisible && !clickedInside && !addCartButtonClicked){
      this.sharedStateService.setPopUpVisibleState(false);
    }
  }

  viewCartEvent(): void {
    this.router.navigate(['/cart']);
  }

  checkOutEvent(): void {
    this.router.navigate(['/payment-page']);
  }
}
