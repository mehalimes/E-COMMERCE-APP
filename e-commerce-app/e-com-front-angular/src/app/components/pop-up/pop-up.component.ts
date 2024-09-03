import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent implements OnInit, OnDestroy, AfterViewInit {
  isHeaderVisible: boolean = true;
  isPopUpVisible: boolean = false;

  @ViewChild('popUpContainer') popUpContainer: ElementRef;

  constructor(
    private router: Router,
    private sharedStateService: SharedStateService
  ) {}

  ngOnInit() {
    this.sharedStateService.isHeaderVisible$.subscribe(isVisible => {
      this.isHeaderVisible = isVisible;
    });

    this.sharedStateService.isPopUpVisible$.subscribe(isVisible => {
      this.isPopUpVisible = isVisible;
    });
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {

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

  async viewCartEvent(): Promise<void> {
    await this.router.navigate(['/cart']);
  }

  async checkOutEvent(): Promise<void> {
    await this.router.navigate(['/payment-page']);
  }
}
