import {
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  @ViewChild('popUpContainer') popUpContainer: ElementRef;
  @ViewChild('popUpLabel') popUpLabel: ElementRef;
  isTextLong: boolean = false;

  constructor(
    private router: Router,
    public sharedStateService: SharedStateService,
  ) {}

  ngAfterViewInit() {
    this.isTextLong = this.popUpLabel.nativeElement.textContent.length >= 50;
    // ilk yüklendiğinde olmuyor ikinci de true oluyor
    console.log(this.isTextLong);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside: boolean = this.popUpContainer?.nativeElement?.contains(event.target) ?? false;
    const addCartButtonClicked: boolean = (event.target as HTMLElement).classList.contains('add-button');
    
    if(!this.sharedStateService.isPopUpVisible && addCartButtonClicked){
      this.sharedStateService.isPopUpVisible = true;
    }
    else if(this.sharedStateService.isPopUpVisible && !clickedInside && !addCartButtonClicked){
      this.sharedStateService.isPopUpVisible = false;
    }
  }

  viewCartEvent(): void {
    this.router.navigate(['/cart']);
  }

  checkOutEvent(): void {
    this.router.navigate(['/payment-page']);
  }
}
