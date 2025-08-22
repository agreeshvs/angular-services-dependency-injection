import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  OnSubscribe(){
    // Logic for subscription can be added here
    // database call, API call, etc.
    // send email to user, etc.
    // alert('Subscribed successfully!');
    let subscriveService = new SubscribeService();
    subscriveService.onSubscribeClicked();
  }
}
