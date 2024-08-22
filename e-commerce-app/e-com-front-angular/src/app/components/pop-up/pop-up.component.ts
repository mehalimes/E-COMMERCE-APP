import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {

  constructor(private router : Router){

  }

  public async viewCartEvent() : Promise<void> { 
    this.router.navigate(["/cart"]);
  }

  public async checkOutEvent() : Promise<void> { 
    this.router.navigate(["/payment-page"]);
  }
}
