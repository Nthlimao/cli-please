const fs = require('fs');

module.exports = { 
    exists(fileName) {
        return new Promise((resolve) => {
            fs.stat(fileName, (err, stat) => {
                if (err) resolve(false);

                resolve(true);
            });
        });
    },
    write(fileName, contentFile) {
        fs.writeFileSync(fileName, contentFile);
    }
}