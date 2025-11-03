const { logger } = require("sequelize/lib/utils/logger");
const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            data: airplane,
            success: true,
            message: "Successfully created airplane",
            err: {}

        })
    }
    catch (err) {
        
        // logger.error("Something went wrong in the controller layer");
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Unable to create airplane",
            err: err
        })
    }
}

module.exports = {
    createAirplane
}