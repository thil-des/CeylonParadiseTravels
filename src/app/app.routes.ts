import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LayoutComponent } from './mainComponents/layout-component/layout-component';
import { HomePageComponent } from './mainComponents/home-page-component/home-page-component';
import { AboutComponent } from './mainComponents/about-component/about-component';
import { ServiceComponent } from './mainComponents/service-component/service-component';
import { TourPackages } from './mainComponents/tour-packages/tour-packages';
import { ContactComponent } from './mainComponents/contact-component/contact-component';
import { DestinationComponent } from './sharedComponents/destination-component/destination-component';
import { Testimonial } from './sharedComponents/testimonial/testimonial';
import { TravelGuides } from './sharedComponents/travel-guides/travel-guides';
import { SevenDaysTourComponent } from './mainComponents/tour-packages/roundTours/seven-days-tour-component/seven-days-tour-component';
import { TenDaysTourComponent } from './mainComponents/tour-packages/roundTours/ten-days-tour-component/ten-days-tour-component';
import { TwoDayTourComponent } from './mainComponents/tour-packages/roundTours/two-day-tour-component/two-day-tour-component';
import { FiveDaysTourComponent } from './mainComponents/tour-packages/roundTours/five-days-tour-component/five-days-tour-component';
import { EllaDayTourComponent } from './mainComponents/tour-packages/dayTours/ella-day-tour-component/ella-day-tour-component';
import { BookingComponent } from './sharedComponents/booking-component/booking-component';
import { ContactUsComponent } from './sharedComponents/contact-us-component/contact-us-component';
import { GalleDayTour } from './mainComponents/tour-packages/dayTours/galle-day-tour/galle-day-tour';
import { KandyDayTourComponent } from './mainComponents/tour-packages/dayTours/kandy-day-tour-component/kandy-day-tour-component';
import { SigiriyaDayTourComponent } from './mainComponents/tour-packages/dayTours/sigiriya-day-tour-component/sigiriya-day-tour-component';




export const routes: Routes = [
    { path: '', 
      component: LayoutComponent ,
      children: [
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: 'about',
          component: AboutComponent
        },
        {
          path: 'service',
          component: ServiceComponent
        },
        {
          path: 'packages',
          component: TourPackages
        },
        {
          path: 'sevendaystours',
          component: SevenDaysTourComponent
        },
        {
          path: 'tendaystours',
          component: TenDaysTourComponent
        },
        {
          path: 'twodaystours',
          component: TwoDayTourComponent
        },
        {
          path: 'Elladaystours',
          component: EllaDayTourComponent
        },
        {
          path: 'Galledaystours',
          component: GalleDayTour
        },
        {
          path: 'Kandydaystours',
          component: KandyDayTourComponent
        },
        {
          path: 'Sirgiriyadaystours',
          component: SigiriyaDayTourComponent
        },
        {
          path: 'fivedaystours',
          component: FiveDaysTourComponent
        },
        {
          path: 'booking',
          component: BookingComponent
        },
        {
          path: 'contact',
          component: ContactUsComponent
        },
        {
          path: 'destination',
          component: DestinationComponent
        },
        {
          path: 'testimonial',
          component :Testimonial
        },
        {
          path: 'travel-guides',
          component: TravelGuides
        }
      ]
    }
];
