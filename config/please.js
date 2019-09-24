#! /usr/bin/env node
// IMPORTS
const fs = require('fs');
const path = require('path'); 

// ARGUMENTOS
const [,, ... args] = process.argv;
const [ command , name , options ] = args;

const commands = command.split(':');
const [ func , type ] = commands;

switch(func) {
    case 'make':
        switch(type) {
            case 'controller':
                fs.stat(`app/controllers/${name}.js`, function(err, stat){
                    if(err !== null) {
                        fs.writeFile(`app/controllers/${name}.js`, 'New Controller', function (err){});
                    }
                });
            break;
            case 'model':
                fs.stat(`app/models/${name}.js`, function(err, stat){
                    if(err !== null) {
                        fs.writeFile(`app/models/${name}.js`, 'New Model', function (err){
                            if(err === null) {
                                if (options === '-c') {
                                    fs.stat(`app/controllers/${name}Controller.js`, function(err, stat){
                                        if(err !== null) {
                                            fs.writeFile(`app/controllers/${name}Controller.js`, 'New Controller', function (err){});
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            break;
        }
    break;
    case 'app':
    break;
    default:
        console.log('QUE TE PASSAS NINHO');
}