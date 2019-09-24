// IMPORTS
const controller = require('./default/controller');
const fs = require('fs');


module.exports = {
    controller(name, options = null) {
        fs.stat(`app/controllers/${name}.js`, function(err, stat){
            if(err !== null) {
                if(options === '-crud') {
                    fs.writeFile(`app/controllers/${name}.js`, controller.controllerCRUD() , function (err){});
                } else {
                    fs.writeFile(`app/controllers/${name}.js`, controller.default() , function (err){});
                }
            }
        });
    },
    model(name, options = null) {
        fs.stat(`app/models/${name}.js`, function(err, stat){
            if(err !== null) {
                fs.writeFile(`app/models/${name}.js`, 'New Model', function (err){
                    if(err === null) {
                        if (options === '-c') {
                            fs.stat(`app/controllers/${name}Controller.js`, function(err, stat){
                                if(err !== null) {
                                    fs.writeFile(`app/controllers/${name}Controller.js`, controller.default(), function (err){});
                                }
                            });
                        } else if (options === '-crud') {
                            fs.stat(`app/controllers/${name}Controller.js`, function(err, stat){
                                if(err !== null) {
                                    fs.writeFile(`app/controllers/${name}Controller.js`, controller.modelCRUD(name), function (err){});
                                }
                            });
                        }
                    }
                });
            }
        });
    }
};