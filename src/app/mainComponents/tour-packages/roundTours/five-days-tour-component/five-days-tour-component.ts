import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TourDetails, TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import toursData from '../../../../databaseJson/tours.json';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';

@Component({
  selector: 'app-five-days-tour-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TourDetailsComponent,PackageItemComponent],
  templateUrl: './five-days-tour-component.html',
  styleUrls: ['./five-days-tour-component.css'],
})
export class FiveDaysTourComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/5daysTours/m5mz7zqwjql44ydc4wyl.jpg',
    'assets/img/5daysTours/fozjxf01vl9yehvucwn2.jpg',
    'assets/img/5daysTours/c8dyxgodivrwf4hxzziq.jpg',
    'assets/img/5daysTours/dp8fjrahvepdlhdudxj0.jpg',
    'assets/img/5daysTours/slqwoimy5yhfgcicn8ob.jpg',
  ];

  currentIndex = 0;
  intervalId: any;
  multiDayTours: any[] = [];
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;


  tour = {
    title: 'Sri Lanka Five Days Tour',
    description:
      'Experience the beauty of Sri Lanka with 5 days full of adventure, culture, and relaxation.',
    duration: '5 Days',
    persons: '20 Persons',
    filecode: "fivedaystours",
    overview: `Experience the best of Sri Lanka in just 5 days (4 nights) with our unforgettable tour package! Stay in premium 4-star hotels on a half-board basis while enjoying private transportation throughout your journey.
This tour covers 20+ must-see attractions across 10 districts, including the thrilling Yala Safari, iconic Sigiriya Rock Fortress, Ella’s scenic train ride, Nine Arches Bridge, Little Adam’s Peak, Sacred Tooth Relic Temple in Kandy,
 Ramboda Falls, colonial Galle Fort, and a peaceful Bentota River tour. Discover the perfect blend of adventure, culture, and relaxation—exclusively with Ceylon Paradise Travels. Let us turn your dream holiday into reality on the Paradise Island of Sri Lanka!`,
    tourType: 'Round Tour',

    itinerary: [
      {
        day: 1,
        title: 'Arrival  & Dambulla Cave Temple',
        activities: [
          {
            type: 'Arrival ',
            title: { title: 'Arrival ', icon: 'fa-plane', color: '#2c3e50' },
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Dambulla Cave Temple',
              icon: 'fa-hiking',
              color: '#f39c12',
            },
            description:
              'Dambulla Royal Cave Temple - A sacred pilgrimage site for 22 centuries.',
            image: 'assets/img/5daysTours/m5mz7zqwjql44ydc4wyl.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Hiriwadunna Village & Lake Adventure',
              icon: 'fa-leaf',
              color: '#8e44ad',
            },
            description:
              "Let's get some traditional Sri Lankan village experience!!! A visit to the hamlet of Hiriwadunna in Sri Lanka showcases the laid-back rhythms of small village life.",
            image: 'assets/img/5daysTours/fozjxf01vl9yehvucwn2.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Sigiriya Lion Rock',
              icon: 'fa-mountain',
              color: '#e74c3c',
            },
            description:
              'To kick off day two s proceedings, you ll be visiting an UNESCO World Heritage site - Sigiriya rock fortress.',
            image: 'assets/img/5daysTours/c8dyxgodivrwf4hxzziq.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Fresco Water Villa',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Hotel Fresco Water Villa or Similar Hotel - HB Basis',
            image: 'assets/img/5daysTours/n78qcneu299z6pfc3elp.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 2,
        title: 'Sigiriya & Dambulla',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Matale Hindu Kovil',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Matale Hindu Kovil, also known as Sri Muthumariamman Temple, is a vibrant Hindu shrine with stunning Dravidian architecture, intricate carvings, and a towering gopuram.',
            image: 'assets/img/5daysTours/slqwoimy5yhfgcicn8ob.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Sri Dalada Maligawa',
              icon: 'fa-place-of-worship',
              color: '#2980b9',
            },
            description:
              'You ll be finally visiting the temple which houses the Sacred Tooth Relic of the Buddha is one of the holiest shrines in the entire Buddhist world!!!',
            image: 'assets/img/5daysTours/npwerj9fdeiayvx5uipe.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Lake Club - Cultural Dance Show',
              icon: 'fa-theater-masks',
              color: '#8e44ad',
            },
            description:
              'The Kandy Lake Club Cultural Dance Show is a stimulating Sri Lankan Arts, Dance & Cultural Heritage Show that is a must see for any visitor who visits the historic city of Kandy.',
            image: 'assets/img/5daysTours/fifyrnqt5tvouhpgh6kk.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Herbal and Spice Garden',
              icon: 'fa-spa',
              color: '#32CD32',
            },
            description:
              'Sri Lanka’s herbal and spice gardens offer a sensory journey through fragrant cinnamon, cardamom, and Ayurvedic plants, showcasing their uses in cooking, healing, and traditional medicine.',
            image: 'assets/img/5daysTours/kt2ugiesd68bdog5kdab.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Thilanka Hotel',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description: 'Stay overnight with HB basis',
            image: 'assets/img/5daysTours/lq1yatorvdru5umzih1h.jpg',
            extra: ['Dinner'],
          },
        ],
      },
      {
        day: 3,
        title: 'Kandy City Tour',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Gem Museum Tour',
              icon: 'fa-gem',
              color: '#A52A2A',
            },
            description:
              'Sri Lanka’s Gem Museum showcases the island’s rich gem heritage, featuring dazzling sapphires, rubies, and moonstones, along with insights into mining, cutting, and crafting exquisite jewelry.',
            image: 'assets/img/5daysTours/x3vpo6yi1bcgfirj1ybp.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ambuluwawa Tower',
              icon: 'fa-building',
              color: '#A9A9A9',
            },
            description:
              'Ambuluwawa Tower offers a thrilling climb with 360° panoramic views of mountains, forests, and rivers. A unique multi-religious site symbolizing unity and natural beauty.',
            image: 'assets/img/5daysTours/b93rqjvnzdo6qdebex9m.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ramboda Falls',
              icon: 'fa-water',
              color: '#1E90FF',
            },
            description:
              'A stunning 109m cascade in Sri Lanka’s hill country, offering breathtaking views and a serene escape amidst nature.',
            image: 'assets/img/5daysTours/gn4ipm14don7nlmrz52v.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Bluefield Tea Factory',
              icon: 'fa-mug-hot',
              color: '#8B4513',
            },
            description:
              'As a land of tea, Nuwara Eliya has quite a large number of tea factories, tea houses and tea fields. Bluefield Tea Factory in Nuwara Eliya is one of the most popular tea factories in Sri Lanka.',
            image: 'assets/img/5daysTours/mvkbp6c8ksfxz9fkcsow.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ella Scenic Train Ride',
              icon: 'fa-landmark',
              color: '#16a085',
            },
            description:
              'Experience the scenic Ella train ride in Sri Lanka, famous for lush tea plantations, misty mountains, and breathtaking views—one of the most beautiful train journeys in the world.',
            image: 'assets/img/5daysTours/dp8fjrahvepdlhdudxj0.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Oak Ray Ella Gap Hotel',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Oak Ray Ella Gap Hotel or similar - HB Basis',
            image: 'assets/img/5daysTours/xowpqo2nib4z21zdldhp.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya via Ramboda Falls',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Nine Arches Bridge',
              icon: 'fa-bridge',
              color: '#A9A9A9',
            },
            description:
              'The majestic Nine Arch Bridge is one of the many reasons for that. The glorious Nine Arch Bridge between Ella and Demodara station is one of the engineering marvels in the early 20th century.',
            image: 'assets/img/5daysTours/beqnuxidbmckapjcag2m.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: "Little adam's peak View Point",
              icon: 'fa-mountain',
              color: '#8B4513',
            },
            description:
              'It is 1141 m in height and from the entrance it takes up to 30-45 min for the hike. Views from the summit are incredible. 360 degrees panoramic views with clouds rolling in, is a treat to watch.',
            image: 'assets/img/5daysTours/otiytm8blekuwwmvj8ek.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana waterfall',
              icon: 'fa-coffee',
              color: '#8e44ad',
            },
            description:
              'Ravana Falls is entrenched in myth and folklore. It is believed that the demon King Ravana, from the epic Ramayan, hid Sita in the cave behind the waterfall after he kidnapped her and brought her back',
            image: 'assets/img/5daysTours/n0oxsxmicxgleixkq2rx.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Yala National Park Sri Lanka',
              icon: 'fa-water',
              color: '#3498db',
            },
            description:
              'Yala is home to 44 varieties of mammal and 215 bird species. Among its more famous residents are the world’s biggest concentration of leopards.',
            image: 'assets/img/5daysTours/xj7qybc2bk5bwnxdkubp.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Grand Tamarind Lake',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Grand Tamarind Lake or Similar - HB Basis',
            image: 'assets/img/5daysTours/if9kvytpsijvdjd49i5m.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
          },
        ],
      },
      {
        day: 5,
        title: 'Ella Adventures',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Coconut Tree Hill',
              icon: 'fa-bridge',
              color: '#c0392b',
            },
            description:
              'Having made its way to almost every traveller’s Instagram profile when they visit Mirissa, the Coconut Tree Hill is a must-do when you’re in Mirissa. The Coconut Tree Hill is a private coconut estate.',
            image: 'assets/img/5daysTours/loepkav24dt36ngebdpp.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Turtle Beach',
              icon: 'fa-water',
              color: '#2980b9',
            },
            description:
              'Turtle Beach in Talpe, near Galle, Sri Lanka, is a tranquil cove known for its clear waters and frequent sea turtle sightings. Visitors can snorkel or observe turtles feeding close to shore, making it',
            image: 'assets/img/5daysTours/jnlc1gcxv4stie9d5i9d.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kosgoda Sea Turtle Conservation Project',
              icon: 'fa-mountain',
              color: '#8e44ad',
            },
            description:
              'The Kosgoda Turtle Conservation Project protects endangered sea turtles through egg hatcheries, rehabilitation, and education. Visitors can see hatchlings and support marine conservation efforts.',
            image: 'assets/img/5daysTours/naoergwn8efrfln63ecp.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Galle Dutch Fort',
              icon: 'fa-mountain',
              color: '#8e44ad',
            },
            description:
              'Originally built by the Portuguese in 1588 then extended on by the Dutch in the 17th-century, It’s now a thriving Sri Lankan community on the Indian Ocean.',
            image: 'assets/img/5daysTours/anwufxd9s7adblju4zjr.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Madu River Safari | මාදු ගගේ | Nilwala Boat Safari',
              icon: 'fa-mountain',
              color: '#8e44ad',
            },
            description:
              'Just a few kilometers away from the city of Bentota lies the fabled Bentota river. Bentota river is high rich in bio diversity. Bank of the river is thickly filled fresh water mangroves.',
            image: 'assets/img/5daysTours/sgfpz3ikjjzntvk7ydil.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Grand Tamarind Lake',
              icon: 'fa-hotel',
              color: '#27ae60',
            },
            description:
              'Accommodation in Grand Tamarind Lake Hotel or Similar - HB Basis',
            image: 'assets/img/5daysTours/if9kvytpsijvdjd49i5m.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom'],
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

  constructor(
    private router: Router,
    private http: HttpClient,
    private countryService: CountryService
  ) {}


  get currentImage() {
    return this.images[this.currentIndex];
  }

  get nextImages() {
    return Array.from({ length: 4 }, (_, i) => {
      const index = (this.currentIndex + i + 1) % this.images.length;
      return { src: this.images[index], index };
    });
  }

  get tourForDetails(): TourDetails {
    return {
      title: this.tour.title,
      description: this.tour.description,
      duration: this.tour.duration,
      persons: this.tour.persons,
      price: this.price,
      tourType: this.tour.tourType,
      overview: this.tour.overview,
      itinerary: this.tour.itinerary,
      includes: this.tour.includes,
      excludes: this.tour.excludes,
    };
  }
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

  async ngOnInit() {
    this.userCountry = await this.countryService.detectCountry();
    this.price = await this.loadPrice(this.tour.filecode);
    this.multiDayTours = await this.loadToursWithPrices(toursData.multiDayTours);
    this.selectedTours = this.multiDayTours.sort(() => 0.5 - Math.random()).slice(0, 3);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

    async loadToursWithPrices(tours: any[]) {
    return Promise.all(
      tours.map(async (tour) => {
        const price = await this.loadPrice(tour.filecode);
        return { ...tour, price };
      })
    );
  }

  loadPrice(filecode: string): Promise<number> {
    const countryFile = `/assets/data/${this.userCountry}${filecode}.json`;
    const defaultFile = `/assets/data/US${filecode}.json`;

    return new Promise((resolve) => {
      this.http.get(countryFile).subscribe({
        next: (data: any) => resolve(data.price[1] ?? 0),
        error: () => {
          this.http.get(defaultFile).subscribe((data: any) => {
            resolve(data.price[1] ?? 0);
          });
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  bookNow() {
    const barcode = 'fivedaystours';
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
