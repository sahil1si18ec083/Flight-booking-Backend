const express = require("express");
const app = express();

const {serverConfig, logger} = require("./config");
const  apiRoutes  = require("./routes");
const { CronService } = require("./utils");
console.log({apiRoutes})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRoutes);
app.listen(serverConfig.port, () => {
    console.log(`Server is running on port ${serverConfig.port}`);
    logger.info(`Server is running on port ${serverConfig.port}`);
    
    // Initialize cron jobs
    CronService.initializeJobs();
});

