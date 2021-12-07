const db = require('../db')

const User = {

    findOne: (token) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE token = ?`, [token], (error, resuts) => {
                if(error){ reject(error); return; }
                resolve(resuts[0])
            })
        })
    }

}

module.exports = User