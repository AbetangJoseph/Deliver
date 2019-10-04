import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navData = {
    mainNav: [
      'Courier Services',
      'Food Delivery',
      'How It Works',
      'FAQs',
      'Sign In',
      'Become A Dispatcher'
    ],
    subNav: ['Home', 'Payment Methods', 'My Orders', 'Cart']
  };

  statsData = {
    stats: [
      {
        src: '/assets/images/store.png',
        text: 'Over 500 Restaurants'
      },
      {
        src: '/assets/images/take-away.png',
        text: 'Over 200 Deliveries Made'
      },
      {
        src: '/assets/images/group.png',
        text: 'Over 500 Registered Customers'
      }
    ]
  };

  cardsContainerData = {
    sectionTitle: 'Recommended Restaurants',
    recommendation: true,
    cardInfo: [
      {
        title: 'Jollof Etcetera',
        stars: 30
      },
      {
        title: 'Jollof Etcetera',
        stars: 20
      },
      {
        title: 'Jollof Etcetera',
        stars: 60
      },
      {
        title: 'Jollof Etcetera',
        stars: 40
      }
    ]
  };

  howItWorks = {
    mainTitle: 'How It Works',
    sectionData: [
      {
        title: 'Select Your Restaurant'
      },
      {
        title: 'Select Your Desired Meal'
      },
      {
        title: 'Get It Delivered Fast'
      }
    ]
  };

  title: string = 'Deliver';
}
