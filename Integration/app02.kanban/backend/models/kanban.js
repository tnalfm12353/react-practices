const fs = require('fs');
const util = require('util');
const path = require('path');


module.exports = {
    findAllCards: async () => {
        try{
            const readFile = util.promisify(fs.readFile).bind(fs);
            const data = await readFile(path.resolve('.', 'backend', 'models', 'json', 'data.json'), 'utf-8');
            return JSON.parse(data);
        } catch(error) {
            console.error(error);
        }
    },

    insertTask: async () => {

    }
}