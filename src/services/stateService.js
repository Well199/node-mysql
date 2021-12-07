const db = require('../db')

const StateService = {

    find: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM states', (error, results) => {
                if(error) {reject(error); return;}
                resolve(results)
            })
        })
    },

}

module.exports = StateService