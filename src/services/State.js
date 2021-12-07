const db = require('../db')

const State = {

    find: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM states', (error, results) => {
                if(error) {reject(error); return;}
                resolve(results)
            })
        })
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM states WHERE id = ? ',[id], (error, results) => {
                if(error) {reject(error); return;}
                resolve(results[0])
            })
        })
    },

}

module.exports = State