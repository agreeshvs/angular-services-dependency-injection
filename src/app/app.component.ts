import { Component } from '@angular/core';
import { SubscribeService } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ SubscribeService] // Providing service at root component level
})
export class AppComponent {
  title = 'angular-services-dependency-injection';
}
