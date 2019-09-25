const fs = require('fs');

module.exports = {
    structureDefault() {
        // app
        const app = 'app/';
        const controllers = 'app/controllers';
        const models = 'app/models';

        if(!fs.existsSync(app)) {
            fs.mkdirSync(app);
        }

        if(!fs.existsSync(controllers)) {
            fs.mkdirSync(controllers);
        }

        if(!fs.existsSync(models)) {
            fs.mkdirSync(models);
        }
    }
}