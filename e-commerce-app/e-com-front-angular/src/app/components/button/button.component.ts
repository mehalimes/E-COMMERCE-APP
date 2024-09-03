import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonEventProp: () => void | Promise<void>;
  @Input() buttonNameProp: string;
  @Input() styleProp?: { [key : string] : string };

  isLoading: boolean = false;

  constructor(
    private sharedStateService : SharedStateService
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