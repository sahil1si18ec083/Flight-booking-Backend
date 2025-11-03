const { logger } = require("sequelize/lib/utils/logger");

class CrudRepository {
    constructor(model){
        this.model = model;

    }
    async create(data){
        try{
            const record = await this.model.create(data);
            return record;
        }
        catch(err){
            logger.error("Something went wrong in the repository layer");
            throw err;
        }
    }
    async destroy(id){
        try{
            await this.model.destroy(
                {
                    where:{
                        id:id
                    }
                }
            )
        }
        catch(err){
            logger.error("Something went wrong in the repository layer");
            throw err;
        }
    }
    async get(id){
        try{
            const record = await this.model.findByPk(id);
            return record;

        }
        catch(err){
            logger.error("Something went wrong in the repository layer");
            throw err;
        }
    }
    async getAll(){
        try{
            const record = await this.model.findAll();
            return record;

        }
        catch(err){
            logger.error("Something went wrong in the repository layer");
            throw err;
        }
    }
    async update(id, data){
        try{
            const record = await this.model.update(data,{
                where:{
                    id:id 
                }});
            return record;
        }
        catch(err){
            logger.error("Something went wrong in the repository layer");
            throw err;
        }      
}
}
module.exports = CrudRepository;