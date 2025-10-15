import { Component, Input } from '@angular/core';
import toursData from '../../databaseJson/tours.json';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from "../../sharedComponents/contact-us-component/contact-us-component";

@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [CommonModule, PackageItemComponent, RouterModule, ContactUsComponent],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css'
})
export class HomePageComponent {
  homecontact = true;
  dayTours: any[] = [];
  multiDayTours: any[] = [];
  currentIndex = 0;
  interval: any;

  activeTab: 'multi' | 'day' = 'multi';

reviews = [
    {
      name: 'Sri Lanka With Roshan',
      date: 'April 28, 2025',
      comment: 'We had a really wonderful time in Sri Lanka. We booked just the car with driver and made our own hotel bookings. The tour was quite in that it was...',
      photo: 'assets/img/testimonial-1.jpg',
      profession: 'XCOUNTRYTO',
      rating: 5
    },
    {
      name: 'Unforgettable Experience!',
      date: 'April 28, 2025',
      comment: 'Excellent trip with amazing and safe driver Roshan! We loved the landscape, the friendly people and the delicious...',
      photo: 'assets/img/testimonial-2.jpg',
      profession: 'JEN2SG',
      rating: 5
    },
    {
      name: 'Wonderful Travel Experience',
      date: 'April 28, 2025',
      comment: 'We are two Italian friends, we spent 10 days exploring Sri Lanka. Our driver, Kumara, was incredibly kind and professional...',
      photo: 'assets/img/testimonial-3.jpg',
      profession: 'MICHELA R',
      rating: 5
    },
    {
      name: 'Family With Little Ones In Sri Lanka',
      date: 'April 27, 2025',
      comment: 'We had Dhana as our driver for days and he was instrumental in us having a lovely holiday! Everything with the company was super easy...',
      photo: 'assets/img/testimonial-4.jpg',
      profession: 'JOANA V',
      rating: 5
    }
  ];
  ngOnInit() {
    this.dayTours = toursData.dayTours;
    this.multiDayTours = toursData.multiDayTours;
    this.autoSlide();
  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  autoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000); // change slide every 5 seconds
  }
  scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
}
