module.exports = {
    default(name) {
        return `const mongoose = require('mongoose');
const ${name}Schema = new mongoose.Schema({

});

const ${name} = mongoose.model('${name}', ${name}Schema);
module.exports = ${name}`;
    }
}