// IMPORTS
const controller = require('./default/controller');
const model = require('./default/model');
const file = require('./file');


const Make = {
    async controller(name, options = null, model = null) {
        const pathFile = `app/controllers/${name}.js`;
        
        if (!(await file.exists(pathFile))) {
            let contentType = controller.default();

            if(options === '-crud' && !model) 
                contentType = controller.controllerCRUD();
            
            if(options === '-crud' && model) 
                contentType = controller.modelCRUD(model);            

            file.write(pathFile, contentType);
        }
    },
    async model(name, options = null) {
        const pathFile = `app/models/${name}.js`;

        if(!(await file.exists(pathFile))) {
            file.write(pathFile, model.default(name));

            if (options === '-c') 
                await Make.controller(`${name}Controller`);
            else if (options === '-crud')
                await Make.controller(`${name}Controller`, options, name);
        }
    }
};

module.exports = Make;