const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const logger = require('../config/logger-config');

class CronService {
    static initializeJobs() {
        // Schedule log rotation at midnight (00:00) every day
        cron.schedule('0 0 * * *', () => {
            try {
                const logPath = path.join(__dirname, '..', '..', 'combined.log');
                // Empty the log file
                fs.writeFileSync(logPath, '');
                logger.info('Log file has been emptied by scheduled cron job');
            } catch (error) {
                console.error('Error during log rotation:', error);
            }
        });

        logger.info('Cron jobs initialized - Log rotation scheduled for midnight');
    }
}

module.exports = {CronService};