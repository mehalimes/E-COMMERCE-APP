import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonEventProp: () => Promise<void> = () => Promise.resolve();
  @Input() buttonNameProp: string;
  @Input() styleProp?: { [key : string] : string };

  isLoading: boolean = false;

  constructor(
    
  )
  {

  }

  async onClick(){
    this.isLoading = true;
    try {
      await this.buttonEventProp();
    }
    catch(err) {
      console.log(err);
    }
    finally {
      this.isLoading = false;
    }
  }
}