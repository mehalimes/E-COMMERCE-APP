import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private lastScrollTop: number = 0;
  public isHidden: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollYOffset: number = window.scrollY;
    if (scrollYOffset <= this.lastScrollTop) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
    this.lastScrollTop = scrollYOffset;
  }
}
