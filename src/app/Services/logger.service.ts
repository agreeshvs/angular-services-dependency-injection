import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // This makes the service available application-wide without needing to add it to providers array.
    // No need to add it to providers array in app.module.ts or any component
})
export class LoggerService {
    logMessage(name: string,status: string){
        console.log(`A new user with name ${name} with status ${status} is added.`);
    }
}