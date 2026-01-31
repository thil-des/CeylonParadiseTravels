import { Component } from '@angular/core';
import {
  TourDetails,
  TourDetailsComponent,
} from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import toursData from '../../../../databaseJson/tours.json';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';

@Component({
  selector: 'app-ten-days-tour-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
  ],
  templateUrl: './ten-days-tour-component.html',
  styleUrl: './ten-days-tour-component.css',
})
export class TenDaysTourComponent {
  images: string[] = [
    'assets/img/7daystour/lzurk0uk82qqjh6soonh.jpg',
    'assets/img/7daystour/u19dmfbuae46dhzpqctu.jpg',
    'assets/img/7daystour/p5nnnq3wt124wwoa0rvo.jpg',
    'assets/img/7daystour/fhlfhn3lx1onsizfpy76.jpg',
    'assets/img/7daystour/dtebtjzozh7sfof4ci7c.jpg',
  ];

  currentIndex = 0;
  intervalId: any;
  multiDayTours: any[] = [];
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  tour = {
    title: 'Sri Lanka Ten Days Tour',
    description:
      'Experience the beauty of Sri Lanka with 10 days full of adventure, culture, and relaxation.',
    duration: '10 Days',
    persons: '20 Persons',
    filecode: 'tendaystours',
    overview: `Embark on an unforgettable private tour across Sri Lanka’s top destinations—Sigiriya, Ella, Kandy, Galle, Dambulla, Nuwara Eliya, Mirissa Beach, Hikkaduwa Beach,
     Colombo and more! Enjoy seamless private transportation, expert-guided experiences, and stays in 4-star hotels on a half-board basis. 
    From ancient wonders to golden beaches and misty mountains, this tour blends culture, adventure, and relaxation. Book now for a hassle-free journey through paradise!`,
    tourType: 'Round Tour',

    itinerary: [
      {
        day: 1,
        title: 'Arrival & Dambulla',
        activities: [
          {
            type: 'Arrival ',
            title: { title: 'Arrival ', icon: 'fa-plane', color: '#2c3e50' },
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Dambulla Cave Temple',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Dambulla Royal Cave Temple, a UNESCO site, features stunning Buddha statues and vibrant murals inside ancient rock caves. A sacred pilgrimage site with breathtaking views and rich history.',
            image: 'assets/img/7daystour/fcltbecuuqh7jivbz3da.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Hiriwadunna Village and Lake Adventure',
              icon: 'fa-tree',
              color: '#00BFFF',
            },
            description:
              'The Hiriwadunna Village Tour offers a scenic rural experience with bullock cart rides, a catamaran boat trip, and authentic Sri Lankan cuisine, showcasing the traditional village lifestyle and nature.',
            image: 'assets/img/7daystour/lecduea8q9key0rwf8pa.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Pidurangala Rock',
              icon: 'fa-mountain',
              color: '#8B4513',
            },
            description:
              'Pidurangala offers a breathtaking sunset with panoramic views of Sigiriya and the lush surroundings. The short hike rewards you with a serene, golden-hued skyline perfect for unforgettable moments.',
            image: 'assets/img/7daystour/p5nnnq3wt124wwoa0rvo.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Fresco Water',
              icon: 'fa-hotel',
              color: '#460657ff',
            },
            description:
              'Accommodation in Hotel Fresco Water Villa or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/kj6cjddumql3sdioy6oo.jpg',
            extra: ['Hotel 4 stars (Luxury)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 2,
        title: 'Sigiriya & Kandy',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Sigiriya Rock Fortress',
              icon: 'fa-mountain',
              color: '#240808ff',
            },
            description:
              'Sigiriya Rock Fortress, a UNESCO site, boasts ancient frescoes, the iconic Lion’s Paw entrance, and stunning panoramic views. A marvel of history, architecture, and breathtaking landscapes.',
            image: 'assets/img/7daystour/ogdihjvqplzmjvq7smxb.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Polonnaruwa Ancient City',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Polonnaruwa Ancient City, a UNESCO site, showcases well-preserved ruins of palaces, temples, and statues, reflecting Sri Lanka’s rich history, architectural brilliance, and cultural heritage.',
            image: 'assets/img/7daystour/pzhchmkm9iygxvzsk8mr.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ayurvedic Treatment',
              icon: 'fa-spa',
              color: '#32CD32',
            },
            description:
              'Sri Lanka’s Ayurvedic treatments offer holistic healing with herbal therapies, massages, and detox rituals, promoting relaxation, wellness, and balance for the mind, body, and soul.',
            image: 'assets/img/7daystour/u19dmfbuae46dhzpqctu.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Fresco Water Villa',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Hotel Fresco Water Villa or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/kj6cjddumql3sdioy6oo.jpg',
            extra: [
              'Hotel 4 stars (Luxury)',
              'Breakfast',
              'Private bathroom',
              'Dinner',
            ],
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
              title: 'Dambulla Dedicated Economic Center',
              icon: 'fa-city',
              color: '#FF8C00',
            },
            description:
              "A bustling wholesale market where fresh fruits, vegetables, and produce from across Sri Lanka are traded daily, serving as a key hub for the country's agriculture.",
            image: 'assets/img/7daystour/nejka8tu1q83ahx4e3qy.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Matale Spice Garden',
              icon: 'fa-spa',
              color: '#32CD32',
            },
            description:
              'Sri Lanka’s herbal and spice gardens offer a sensory journey through fragrant cinnamon, cardamom, and Ayurvedic plants, showcasing their uses in cooking, healing, and traditional medicine.',
            image: 'assets/img/7daystour/s4mor4dflhxraey19a26.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Matale Hindu Kovil',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Matale Hindu Kovil, also known as Sri Muthumariamman Temple, is a vibrant Hindu shrine with stunning Dravidian architecture, intricate carvings, and a towering gopuram.',
            image: 'assets/img/7daystour/he37e6rn0fjxdaw1ksuu.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Viewpoint',
              icon: 'fa-binoculars',
              color: '#1E90FF',
            },
            description:
              'Kandy Viewpoint offers a stunning panoramic view of the city, Kandy Lake, and surrounding hills. A perfect spot to capture breathtaking scenery, especially at sunrise or sunset.',

            image: 'assets/img/7daystour/u5g5cji6wqygynoac8lh.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Lake',
              icon: 'fa-water',
              color: '#1E90FF',
            },
            description:
              'A serene man-made lake in the heart of Kandy, offering scenic walks, stunning reflections, and a peaceful escape near the sacred Temple of the Tooth Relic.',
            image: 'assets/img/7daystour/o6eo5zp4jgydot4im1hm.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Kandy Cultural Dance Show',
              icon: 'fa-theater-masks',
              color: '#FF69B4',
            },
            description:
              'The Kandy Cultural Dance Show showcases Sri Lanka’s rich heritage through vibrant traditional dances, drumming, and fire performances.',
            image: 'assets/img/7daystour/e3dvntewjigjdq9gr9rs.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Sri Dalada Maligawa (Temple of the Tooth)',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Sri Dalada Maligawa, or the Temple of the Tooth Relic, is a sacred Buddhist site in Kandy, housing Buddha’s tooth relic and featuring stunning architecture, rituals, and rich history.',
            image: 'assets/img/7daystour/pydb6pbiwmlqinphneda.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Hotel Topaz (or similar) - HB Basis',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Hotel Topaz or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/bpdjmsresyq325j52kv4.jpg',
            extra: [
              'Hotel 4 stars (Premium)',
              'Breakfast',
              'Private bathroom',
              'Dinner',
            ],
          },
        ],
      },
      {
        day: 4,
        title: 'Nuwara Eliya',
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
            image: 'assets/img/7daystour/tyyd4fgzbhjazgnueiq1.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Peradeniya Royal Botanical Garden',
              icon: 'fa-seedling',
              color: '#228B22',
            },
            description:
              'Peradeniya Royal Botanical Garden boasts 4,000+ plant species, including orchids, palms, and a giant Javan fig tree. A serene paradise for nature lovers.',
            image: 'assets/img/7daystour/gm9ojh6qyelb9ny8vuow.jpg',
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
            image: 'assets/img/7daystour/uap5i00vlvjtn86fta6w.jpg',
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
            image: 'assets/img/7daystour/r61qg64ifh4zdl9iqn0t.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Tea Factory & Plantation Tour',
              icon: 'fa-mug-hot',
              color: '#8B4513',
            },
            description:
              'Bluefield Tea Factory offers a guided tour through Sri Lanka’s tea-making process, from plucking to brewing, with fresh tastings amid scenic plantations.',
            image: 'assets/img/7daystour/o3ogmvgd10wgnhqgccak.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Ramboda Falls Hotel',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Ramboda Falls Hotel or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/hibuduosgp7hqwm9jb8n.jpg',
            extra: [
              'Hotel 4 stars (Premium)',
              'Breakfast',
              'Private bathroom',
              'Dinner',
            ],
          },
        ],
      },
      {
        day: 5,
        title: 'Ella',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Nuwara Eliya Post Office',
              icon: 'fa-envelope',
              color: '#FF4500',
            },
            description:
              'A charming colonial-era building with red-brick architecture, one of Sri Lanka’s oldest post offices still in operation today.',
            image: 'assets/img/7daystour/lzurk0uk82qqjh6soonh.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Gregory Lake',
              icon: 'fa-water',
              color: '#1E90FF',
            },
            description:
              'Gregory Lake in Nuwara Eliya is a scenic spot perfect for boating, picnics, and horse rides, surrounded by misty hills and lush gardens.',
            image: 'assets/img/7daystour/ycdfi4stiukfqgexhovj.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Ella Train Journey',
              icon: 'fa-train',
              color: '#696969',
            },
            description:
              'A breathtaking journey through Sri Lanka’s lush landscapes, with scenic views of tea plantations, waterfalls, and mountains.',
            image: 'assets/img/7daystour/je0cgfrv8jcm3k8rzrpw.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Nine Arches Bridge',
              icon: 'fa-bridge',
              color: '#A9A9A9',
            },
            description:
              'A stunning colonial-era structure in Ella, known for its breathtaking beauty, spanning lush greenery and tea plantations.',
            image: 'assets/img/7daystour/spv343m4zntq18agfpaw.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: "Little Adam's Peak",
              icon: 'fa-mountain',
              color: '#8B4513',
            },
            description:
              'A moderate hike with stunning panoramic views of surrounding hills, tea plantations, and valleys.',
            image: 'assets/img/7daystour/raobfj1cwsowifujxhkj.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Oak Ray Ella Gap Hotel (or similar) - HB Basis',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Oak Ray Ella Gap Hotel or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/IMG_6497-1.jpg',
            extra: [
              'Hotel 4 stars (Premium)',
              'Breakfast',
              'Private bathroom',
              'Dinner',
            ],
          },
        ],
      },
      {
        day: 6,
        title: 'Yala Safari',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Ravana Falls',
              icon: 'fa-water',
              color: '#1E90FF',
            },
            description:
              'A majestic 25-meter cascade surrounded by lush greenery near Ella.',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Monkey Feeding',
              icon: 'fa-cave',
              color: '#A52A2A',
            },
            description:
              'Monkey feeding in Sri Lanka offers a fun, interactive experience, where visitors can safely feed playful monkeys in natural settings like beaches, and temples, creating memorable wildlife encounters.',
            image: 'assets/img/7daystour/ryone5px9iqxryaxqe5g.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Buduruwagala Raja Maha Viharaya',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Famous for its impressive rock carvings, including a towering 51-foot Buddha statue, set in a peaceful natural environment.',
            image: 'assets/img/7daystour/jm8xxusjpfjwuwk2kjkz.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Yala National Park Safari',
              icon: 'fa-binoculars',
              color: '#228B22',
            },
            description:
              'A thrilling wildlife experience where you can spot leopards, elephants, and diverse animals in Yala National Park.',
            image: 'assets/img/7daystour/rapszppomvhjac9sd3sb.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Grand Tamarind Lake (or similar) - HB Basis',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Grand Tamarind Lake or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/lrqee4ssqh6w9efbewzi.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 7,
        title: 'Southern Beaches',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Coconut Tree Hill (Mirissa)',
              icon: 'fa-mountain',
              color: '#228B22',
            },
            description:
              'A picturesque spot in Mirissa with stunning views of lush coconut palms and the Indian Ocean.',
            image: 'assets/img/7daystour/kolleldbe5pt7keqqls3.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Dondra Head Lighthouse',
              icon: 'fa-landmark',
              color: '#A9A9A9',
            },
            description:
              'Located at Sri Lanka’s southern tip, offering panoramic ocean views and historic charm.',
            image: 'assets/img/7daystour/gf3kppt2kpvcfd5bgmgh.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Mirissa Beach',
              icon: 'fa-solid fa-umbrella-beach',
              color: '#00BFFF',
            },
            description:
              'A tropical paradise known for golden sands, clear waters, and vibrant sunsets.',
            image: 'assets/img/7daystour/goayffj226ceow8zxhey.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Somerset Mirissa Hotel',
              icon: 'fa-hotel',
              color: '#2c3e50',
              description:
                'Accommodation in Somerset Mirissa Hotel or Similar hotel - HB Basis',
              image: 'assets/img/7daystour/s0dhmdjem8sw5klqayjp.jpg',
              extra: [
                'Hotel 4 stars (Premium)',
                'Breakfast',
                'Private bathroom',
                'Dinner',
              ],
            },
          },
        ],
      },
      {
        day: 8,
        title: 'Southern Beaches',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Whale Watching (Mirissa)',
              icon: 'fa-fish',
              color: '#1E90FF',
            },
            description:
              'Mirissa Whale Watching offers an unforgettable experience to see blue whales, sperm whales, and dolphins in their natural habitat, set against the stunning backdrop of the Indian Ocean.',
            image: 'assets/img/7daystour/jx21kvvzv5f3j5qwptfb.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Weligama Surf Center',
              icon: 'fa-solid fa-water',
              color: '#00BFFF',
            },
            description:
              'Weligama Water Sports offers thrilling activities like surfing, snorkeling, and diving in clear waters, perfect for adventure seekers and those wanting to explore the vibrant marine life.',
            image: 'assets/img/7daystour/xgagrb88jxwi6xtth2bz.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Weligama Beach',
              icon: 'fa-solid fa-umbrella-beach',
              color: '#00BFFF',
            },
            description:
              'Weligama Beach, with its golden sands and calm waters, is perfect for surfing, swimming, and relaxing. A serene coastal haven for beach lovers and water sports enthusiasts.',
            image: 'assets/img/7daystour/pzuj2lnplvm36klcg08r.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Somerset Mirissa Hotel (or similar) - HB Basis',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
          },
          {
            type: 'Breakfast',
            title: {
              title: 'Somerset Mirissa Hotel',
              icon: 'fa-hotel',
              color: '#2c3e50',
              description:
                'Breakfast at Somerset Mirissa Hotel or Similar hotel - HB Basis',
              image: 'assets/img/7daystour/p3deobu0pqnxuunhzzf5.jpg',
              extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
            },
          },
        ],
      },
      {
        day: 9,
        title: 'Galle & Colombo',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Unawatuna Beach',
              icon: 'fa-solid fa-umbrella-beach',
              color: '#00BFFF',
            },
            description:
              'Turtle Beach in Unawatuna is a peaceful spot known for its soft sands, clear waters, and the chance to see turtles nesting and swimming. A serene escape for nature lovers and beachgoers.',
            image: 'assets/img/7daystour/dtebtjzozh7sfof4ci7c.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Turtle Hatchery (Kosgoda)',
              icon: 'fa-turtle',
              color: '#32CD32',
            },
            description:
              'Kosgoda Turtle Hatchery is a conservation site dedicated to protecting endangered sea turtles. Visitors can learn about turtle nesting, hatching, and efforts to preserve these marine creatures.',
            image: 'assets/img/7daystour/qugfaofp7xicwn5ybuns.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Koggala Stilt Fishermen',
              icon: 'fa-fish',
              color: '#1E90FF',
            },
            description:
              'Stilt fishing is a unique traditional method in Sri Lanka, where fishermen perch on wooden poles in shallow waters to catch fish. It’s a captivating sight and a symbol of local cultural heritage.',
            image: 'assets/img/7daystour/gjvahwfjyvafq808qpra.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Galle Fort',
              icon: 'fa-landmark',
              color: '#A52A2A',
            },
            description:
              'Galle Dutch Fort, a UNESCO World Heritage site, is a historic colonial fortress with charming streets, museums, and stunning views of the Indian Ocean, blending history and vibrant local culture.',
            image: 'assets/img/7daystour/swnnwiihe8wxpcdsft2v.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Madu River Safari | මාදු ගගේ | Nilwala Boat Safari',
              icon: 'fa-city',
              color: '#FF8C00',
            },
            description:
              'Madu River Boat Safari takes you through a tranquil mangrove forest, offering sightings of exotic wildlife, birds, and lush landscapes, providing a serene and immersive nature experience.',
            image: 'assets/img/7daystour/fhlfhn3lx1onsizfpy76.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Kamili Beach Resort',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Accommodation in Kamili Beach Resort or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/lrqee4ssqh6w9efbewzi.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Dinner'],
          },
        ],
      },
      {
        day: 10,
        title: 'Departure from Colombo',
        activities: [
          {
            type: 'Guided tour',
            title: {
              title: 'Peraliya Tsunami Memorial',
              icon: 'fa-monument',
              color: '#FF8C00',
            },
            description:
              'Peraliya Tsunami Memorial honors the victims of the 2004 tsunami, featuring a towering Buddha statue as a symbol of peace and remembrance near the site of Sri Lanka’s worst tsunami disaster.',
            image: 'assets/img/7daystour/lf8xpxoe67nlur3zr3da.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Independence Memorial Hall',
              icon: 'fa-landmark',
              color: '#A9A9A9',
            },
            description:
              'Independence Square in Colombo is a historic landmark built to commemorate Sri Lanka’s independence, featuring grand colonial architecture, lush gardens, and a peaceful atmosphere for visitors.',
            image: 'assets/img/7daystour/fsrleaf7977wcxityzu8.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Gangaramaya Temple',
              icon: 'fa-landmark',
              color: '#FFD700',
            },
            description:
              'Gangaramaya Temple in Colombo is a beautiful Buddhist temple blending Sri Lankan, Thai, and Chinese architecture, featuring statues, relics, and a serene lakeside setting.',
            image: 'assets/img/7daystour/fn10nlk7fc0dzyawswa5.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Galle Face Green',
              icon: 'fa-park',
              color: '#32CD32',
            },
            description:
              'Galle Face Green in Colombo is a scenic oceanfront promenade, perfect for relaxing walks, stunning sunsets, and enjoying street food, offering a lively atmosphere by the Indian Ocean.',
            image: 'assets/img/7daystour/qu0e7cjpkcfhfds1zeem.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Pettah Market',
              icon: 'fa-store',
              color: '#FF4500',
            },
            description:
              'Colombo Fort Market is a bustling hub offering a mix of local goods, clothing, spices, and street food, providing a vibrant shopping experience in the heart of the city.',
            image: 'assets/img/7daystour/vlk48jx8ywhuzyqlvqg8.jpg',
          },
          {
            type: 'Guided tour',
            title: {
              title: 'Red Mosque (Jami Ul-Alfar Mosque)',
              icon: 'fa-mosque',
              color: '#FF0000',
            },
            description:
              'Jami Ul-Alfar Mosque, or the Red Mosque in Colombo, is an iconic landmark with striking red-and-white architecture, offering a glimpse into Sri Lanka’s rich Islamic heritage.',
            image: 'assets/img/7daystour/owzua0jhk0zazg9d8hcn.jpg',
          },
          {
            type: 'Accommodation',
            title: {
              title: 'Kamili Beach Resort (or similar) - HB Basis',
              icon: 'fa-hotel',
              color: '#2c3e50',
            },
            description:
              'Breakfast at Kamili Beach Resort or Similar hotel - HB Basis',
            image: 'assets/img/7daystour/2024-07-27.jpg',
            extra: ['Hotel 4 stars (Premium)', 'Private bathroom', 'Breakfast'],
          },
          {
            type: 'Departure',
            title: { title: 'Departure', icon: 'fa-plane', color: '#2c3e50' },
          },
        ],
      },
    ],

    includes: [
      'Air-Conditioned Private Vehicle',
      'English / German / Korean-speaking guide',
      'Breakfast',
      'Dinner',
      '9-night accommodation at 4 Star Hotels on HB Basis',
      'Pickup & Drop Off',
      'Fuel & Parking Fees',
      '24 Hours Service',
      'Unlimited Mileage/Kilometer for entire round tour',
    ],
    excludes: ['Drinks', 'Entrance & Activities Fees'],
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
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
    this.multiDayTours = await this.loadToursWithPrices(
      toursData.multiDayTours,
    );
    this.selectedTours = this.multiDayTours
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  async loadToursWithPrices(tours: any[]) {
    return Promise.all(
      tours.map(async (tour) => {
        const price = await this.loadPrice(tour.filecode);
        return { ...tour, price };
      }),
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
        },
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  bookNow() {
    const barcode = 'tendaystours';
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
