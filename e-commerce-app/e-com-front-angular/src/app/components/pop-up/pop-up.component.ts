import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent implements OnInit, OnDestroy {
  isHeaderHidden: boolean = false;
  isPopUpHidden: boolean = false;
  addCartButton: HTMLButtonElement;

  @ViewChild('popUpContainer') popUpContainer : ElementRef;

  constructor(
    private router : Router
  )
  {

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

  async viewCartEvent() : Promise<void> { 
    await this.router.navigate(["/cart"]);
  }

  async checkOutEvent() : Promise<void> { 
    await this.router.navigate(["/payment-page"]);
  }

}
