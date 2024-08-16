import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageContainerComponent } from './product-page-container.component';

describe('ProductPageContainerComponent', () => {
  let component: ProductPageContainerComponent;
  let fixture: ComponentFixture<ProductPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
