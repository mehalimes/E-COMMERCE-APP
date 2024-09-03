import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  lastScrollTop: number = 0;
  isHeaderVisible: boolean = true;

  constructor(
    private sharedStateService : SharedStateService
  )
  {
    
  }

  ngOnInit(){
    this.sharedStateService.isHeaderVisible$.subscribe(isVisible => {
      this.isHeaderVisible = isVisible;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollYOffset: number = window.scrollY;
    if (scrollYOffset <= this.lastScrollTop) {
      this.sharedStateService.setHeaderVisibleState(true);
    } else {
      this.sharedStateService.setHeaderVisibleState(false);
    }
    this.lastScrollTop = scrollYOffset;
  }
}
