import { Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable() 
// Injectable decorator allows this service to be injected into components or other services
export class UserService{
    users: User[] = [
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Mary Johnson','Female','Yearly','Inactive'),
        new User('John Smith', 'Male', 'Quarterly', 'Active'),
    ];

    constructor(private loggerService: LoggerService) {}


    getAllUsers(): User[]{
        return this.users;
    }

    createUser(name: string,gender: string,subType: string,status: string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);

        /* let logger = new LoggerService();
        logger.logMessage(name,status) */

        this.loggerService.logMessage(name,status);
    }
}