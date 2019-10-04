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
  title: string = 'Deliver';
}
