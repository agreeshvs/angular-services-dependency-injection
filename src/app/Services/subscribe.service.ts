import { Injectable } from "@angular/core";

@Injectable()

export class SubscribeService{
    // This service can be used to handle subscription logic
    // such as API calls, database interactions, etc.

    // constructor(private http: HttpClient) { }

    onSubscribeClicked(module: string): void {
        // Logic to subscribe the user
        // For example, sending an API request to a backend service
        alert('Thank you for subscribing from '+module+' ! You will receive updates soon.');
    }
} 