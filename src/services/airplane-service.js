const { logger } = require("sequelize/lib/utils/logger");
const { Airplanerepository } = require("../repositories");

const airplaneRepository = new Airplanerepository();
async function createAirplane(data){
    try{
        console.log(data)
        const airplane = await airplaneRepository.create(data);
        return airplane;

    }
    catch(err){
        logger.error("Something went wrong in the service layer");
        throw err;
    }

}
module.exports={
    createAirplane
}