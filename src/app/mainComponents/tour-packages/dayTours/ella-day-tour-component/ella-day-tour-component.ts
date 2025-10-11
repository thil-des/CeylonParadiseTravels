import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import toursData from '../../../../databaseJson/tours.json';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';

@Component({
  selector: 'app-two-day-tour-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TourDetailsComponent,PackageItemComponent],
  templateUrl: './ella-day-tour-component.html',
  styleUrls: ['./ella-day-tour-component.css'],
})
export class EllaDayTourComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/package-1.jpg',
    'assets/img/package-2.jpg',
    'assets/img/package-3.jpg',
    'assets/img/package-4.jpg',
    'assets/img/package-5.jpg',
  ];

  currentIndex = 0;
  intervalId: any;
  multiDayTours: any[] = [];
  selectedTours: any[] = [];

  tour = {
    title: 'Sri Lanka Ella One Day Tour',
    description:
      'Experience the beauty of Ella with one day full of adventure, culture, and relaxation.',
    duration: 'one Day',
    persons: '20 Persons',
    price: '$266.69',
    overview: `Discover the beauty of Sri Lanka with our unforgettable tour, featuring the iconic Ella Nine Arches Bridge, where you can marvel at the scenic train crossing. Visit the Udawalawe Elephant Orphanage to observe rescued elephants up close. Experience the natural splendor of Ravana Falls, one of the island’s most impressive waterfalls. Hike up Little Adam’s Peak for stunning panoramic views, capturing the essence of Sri Lanka’s highlands. Complete your adventure with a mini train ride through Ella’s picturesque landscapes, creating lasting memories of this enchanting journey.`,
    tourType: 'Round Tour',

    itinerary: [
      {
        day: 1,
        title: 'Nine Arches Bridge',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Nine Arches Bridge',
              icon: 'fa-hiking',
              color: '#f39c12',
            },
            description:
              '1st Stop: The majestic Nine Arch Bridge is one of the many reasons for that. The glorious Nine Arch Bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century',
            image: 'assets/img/onedayTour/fyx3pow6miih6ih3quae.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ella Train Trips',
              icon: 'fa-train',
              color: '#063764ff',
            },
            description:
              'Ella train ride is the most beautiful train ride in Sri Lanka, if not in the world! Board the train and experience breathtaking views of lush green tea plantations, mountains, viaducts, valleys etc.',
            image: 'assets/img/onedayTour/p0nvfqcsawhjho5xdmiq.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Little Adams Peak',
              icon: 'fa-leaf',
              color: '#0f6935ff',
            },
            description:
              '2nd Stop: It is 1141 m in height and from the entrance it takes up to 30-45 min for the hike. Views from the summit are incredible. 360 degrees panoramic views.',
            image: 'assets/img/onedayTour/lflstihjkbvesjfu7tyv.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana waterfall',
              icon: 'fa-water',
              color: '#8e44ad',
            },
            description:
              '3rd Stop: Ravana Falls, one of the widest falls in the country.The falls are quite impressive, and you can climb over some of the rocks to get a closer look.',
            image: 'assets/img/onedayTour/xyhfwqmffunhau5i5wr2.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana waterfall',
              icon: 'fa-elephant',
              color: '#8e44ad',
            },
            description:
              '4th Stop: You are able to observe an animated group of around 20 or 30 juvenile and teenage pachyderms, who are fed four times a day.',
            image: 'assets/img/onedayTour/cdjxm7uxssjfvaen39nf.jpg',
          },
        ],
      },
    ],

    includes: [
      'Air-Conditioned Private Vehicle',
      'English Speaking Professional Driver',
      "Driver's Accommodation & Meals",
      'Pickup & Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage/Kilometer for entire round tour',
      'Your Accommodation',
    ],
    excludes: ['Food & Drinks', 'Entrance & Activities Fees'],
  };

  get currentImage() {
    return this.images[this.currentIndex];
  }

  get nextImages() {
    return Array.from({ length: 4 }, (_, i) => {
      const index = (this.currentIndex + i + 1) % this.images.length;
      return { src: this.images[index], index };
    });
  }

  constructor(private router: Router) {}
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  goToImageFromThumb(index: number) {
    this.currentIndex = index;
  }

  ngOnInit() {
    this.multiDayTours = toursData.multiDayTours;
    this.selectedTours = this.multiDayTours.sort(() => 0.5 - Math.random()).slice(0, 3);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  bookNow() {
    const barcode = 'daytour-ella';
    localStorage.setItem('tour', JSON.stringify(this.tour));
    localStorage.setItem('filecode', barcode);
    localStorage.setItem('image', this.images[0]);
    this.router.navigate(['/booking'], {
      state: {
        tour: this.tour,
        barcode: barcode,
        Image: this.images[0],
      },
    });
  }
}
