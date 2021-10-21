import { Request, Response, Application } from "express";
 import {novatocontroller } from '../controller/novato.controller'; 

export class UserRoutes { 
    
    
    public userController: novatocontroller = new novatocontroller();


public routes(app: Application): void{
    app.route('/users').get(this.userController.index); 
} 
}