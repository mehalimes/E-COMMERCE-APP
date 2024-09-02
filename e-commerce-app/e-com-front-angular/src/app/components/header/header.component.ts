import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { setField } from '../../store/app.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  lastScrollTop: number = 0;
  isHeaderHidden: boolean = false;

  state$: Observable<AppState>;


  constructor(
    private store: Store<{ app : AppState}>
  )
  {
    
  }

  ngOnInit(){
    this.state$ = this.store.select('app');
    this.state$.subscribe(state => {
      this.isHeaderHidden = state.isHeaderHidden;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollYOffset: number = window.scrollY;
    if (scrollYOffset <= this.lastScrollTop) {
      this.store.dispatch(setField({ field : 'isHeaderHidden', value: false }));
    } else {
      this.store.dispatch(setField({ field : 'isHeaderHidden', value: true }));
    }
    this.lastScrollTop = scrollYOffset;
  }
}
