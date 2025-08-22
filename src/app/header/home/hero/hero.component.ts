import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  OnSubscribe(){
    // Logic for subscription can be added here
    // database call, API call, etc.
    // send email to user, etc.
    // alert('Subscribed successfully!');
    let subscriveService = new SubscribeService();
    subscriveService.onSubscribeClicked();
  }
}
