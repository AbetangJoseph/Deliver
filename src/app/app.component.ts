import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navData: object = {
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

  statsData: object = {
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

  title: string = 'Deliver';
}
