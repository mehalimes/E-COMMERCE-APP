import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private isHeaderVisibleSource = new BehaviorSubject<boolean>(true);
  private isPopUpVisibleSource = new BehaviorSubject<boolean>(false);
  
  isHeaderVisible$ = this.isHeaderVisibleSource.asObservable();
  isPopUpVisible$ = this.isPopUpVisibleSource.asObservable();

  constructor() { }

  setHeaderVisibleState(isVisible: boolean): void {
    this.isHeaderVisibleSource.next(isVisible);
  }

  setPopUpVisibleState(isVisible: boolean): void {
    this.isPopUpVisibleSource.next(isVisible);
  }
}
