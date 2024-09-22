import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedStateService } from '../../services/shared-state.service';
import { Router } from '@angular/router';

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
    public sharedStateService : SharedStateService,
    private router : Router
  )
  {
    
  }

  ngOnInit(){
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollYOffset: number = window.scrollY;
    if (scrollYOffset <= this.lastScrollTop) {
      this.sharedStateService.isHeaderVisible = true;
    } else {
      this.sharedStateService.isHeaderVisible = false;
    }
    this.lastScrollTop = scrollYOffset;
  }

  navigateToCart() : void {
    this.router.navigate(['/cart']);
  }

}
