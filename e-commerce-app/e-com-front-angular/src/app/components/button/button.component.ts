import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonEventProp: () => Promise<void>;
  @Input() buttonNameProp: string;
  @Input() styleProp?: { [key : string] : string };

  public isLoading: boolean = false;

  public async onClick(){
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