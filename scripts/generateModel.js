const { exec } = require('child_process');

const modelName = process.argv[2];
const attributes = process.argv.slice(3).join(',');

if (!modelName || !attributes) {
    console.error('Please provide a model name and attributes.');
    process.exit(1);
}

const command = `npx sequelize model:generate --name ${modelName} --attributes ${attributes}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});