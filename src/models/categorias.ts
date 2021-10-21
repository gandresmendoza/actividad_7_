const Sequelize = require(`sequelize`);

import {database} from "../database/db"

export class categorias extends Sequelize.Model{
    public novato!: string;
    public rockiI!: string;
    public rockiII!: string;
    public profesional!: string;
}

export interface categorias 
{
    novato: string;
    rockiI: string;
    rockiII: string;
    profesional: string;

}
categorias.init (
    {


        novato:{


            type:Sequelize.DataTypes.number,
             allowNull: false
            },
       
         rockiI:{


            type:Sequelize.DataTypes.string,
             allowNull: false
            },
   
            rockiII:{
   
               type:Sequelize.DataTypes.string,
                allowNull: false
               },
   
               profesional:{
   
                   type:Sequelize.DataTypes.number,
                    allowNull: false
                   }
   
   
   
       },
   
      {
       tableName:"categorias",
       Sequelize: database,
       timestamps: true
   
   
      }
 
   );