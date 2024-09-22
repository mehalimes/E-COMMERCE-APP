import { Component, Input, OnInit } from '@angular/core';
import { SharedStateService } from '../../services/shared-state.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() buttonEventProp: () => void | Promise<void>;
  @Input() buttonNameProp: string;
  @Input() styleProp?: { [key: string]: string };
  @Input() classProp?: string;

  productId: number;

  isLoading: boolean = false;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private sharedStateService: SharedStateService
  ) {}

  ngOnInit(){
    
  }

  async onClick() {
    this.isLoading = true;
    try {
      const result = this.buttonEventProp();
      if (result instanceof Promise) {
        await result;
      } else {
        result;
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoading = false;
    }
  }
}
