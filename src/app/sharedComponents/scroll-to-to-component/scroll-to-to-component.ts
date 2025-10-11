import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-to-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-to-component.html',
  styleUrl: './scroll-to-to-component.css'
})
export class ScrollToToComponent {
  isShow: boolean = false;
  topPosToStartShowing = 800;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShow = scrollPosition > this.topPosToStartShowing;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
