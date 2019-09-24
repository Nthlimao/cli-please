#! /usr/bin/env node
// IMPORTS
const make = require('./make');
const fs = require('fs');

// ARGUMENTOS
const [,, ... args] = process.argv;
const [ command , name , options ] = args;

const commands = command.split(':');
const [ func , type ] = commands;

switch(func) {
    case 'make':
        switch(type) {
            case 'controller':
                make.controller(name, options);
            break;
            case 'model':
                make.model(name, options);
            break;
        }
    break;
    case 'app':
    break;
    default:
        console.log('QUE TE PASSAS NINHO');
}