import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';

export interface Activity {
  type: string;          // e.g. "Guided tour", "Accommodation", "Dinner"
  title: title;        // e.g. "Pidurangala Rock", "Fresco Water Villa"
  description?: string;  // e.g. "Little hike to Pidurangala Rock..."
  icon?: string;         // e.g. "fa-hotel", "fa-hiking", "fa-utensils"
  image?: string;        // optional image path
  extra?: string[];      // optional extra details (e.g. "Private bathroom")
}

export interface title {
  title?: string;
  icon?: string;
  color?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}
export interface TourDetails {
  title: string;
  description: string;
  duration: string;
  persons: string;
  price: number;
  tourType?: string;
  overview?: string;
  itinerary?: ItineraryDay[];
  includes?: string[];
  excludes?: string[];
}

@Component({
  selector: 'app-tour-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-details-component.html',
  styleUrl: './tour-details-component.css',
})
export class TourDetailsComponent {
  @Input() tour!: TourDetails;

  expandedDays: { [key: number]: boolean } = {};
  static PackageItemComponent: readonly any[] | Type<any>;

  toggleDay(day: number) {
    const isAlreadyOpen = this.expandedDays[day];

    this.expandedDays = {};

    if (!isAlreadyOpen) {
      this.expandedDays[day] = true;
    }
  }

  constructor() {}

  selectedImage: string | null = null;

openImage(img: string) {
  this.selectedImage = img;
}

closeImage() {
  this.selectedImage = null;
}
  ngOnInit(): void {
  }
}
