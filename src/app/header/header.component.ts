import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SubscribeService] // 2. What to provide
})
export class HeaderComponent {
  selectedTab: string = 'home';

  // 1. How to provide a service to a component
  constructor(private subService: SubscribeService) { }


  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    // Logic for subscription can be added here
    // database call, API call, etc.
    // send email to user, etc.
    // alert('Subscribed successfully!');

    /* let subscriveService = new SubscribeService();
    subscriveService.onSubscribeClicked(); */

    // 3. How to use the service
    this.subService.onSubscribeClicked('header component');
  }
}
