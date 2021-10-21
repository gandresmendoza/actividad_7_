import { Request, Response } from "express";
import {categorias } from "../models/categorias";

export class novatocontroller{
    public index(req: Request, res: Response){
        categorias.findAll({})
            .then((categorias:Array<categorias>) => res.json(categorias))
            .catch((err: Error) => res.status(500).json(err));
            
    }
    public mostrarnovatos(){
        
    }

}