import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page-component/home-page-component';
import { ScrollToToComponent } from '../../sharedComponents/scroll-to-to-component/scroll-to-to-component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [CommonModule,ScrollToToComponent,RouterModule],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css'
})
export class LayoutComponent {

}
