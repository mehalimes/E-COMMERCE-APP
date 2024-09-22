import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  isHeaderVisible: boolean = false;
  isPopUpVisible: boolean = false;
  productId: number = 0;
  currentProduct: Product;

  constructor() { }
}
