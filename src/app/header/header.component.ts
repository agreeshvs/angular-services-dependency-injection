import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab: string = 'home';

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

    let subscriveService = new SubscribeService();
    subscriveService.onSubscribeClicked();
  }
}
