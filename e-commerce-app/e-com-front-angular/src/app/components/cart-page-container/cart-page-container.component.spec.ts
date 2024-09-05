import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageContainerComponent } from './cart-page-container.component';

describe('CartPageContainerComponent', () => {
  let component: CartPageContainerComponent;
  let fixture: ComponentFixture<CartPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
