const db = require('../db')

const User = {

    findToken: (token) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE token = ?`, [token], (error, resuts) => {
                if(error){ reject(error); return; }
                resolve(resuts[0])
            })
        })
    },

    findEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE email = ?`, [email], (error, resuts) => {
                if(error){ reject(error); return; }
                resolve(resuts[0])
            })
        })
    },

    setToken: (token, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE users SET token = ? WHERE id = ?`, [token, id], (error, resuts) => {
                if(error){ reject(error); return; }
                resolve(resuts[0])
            })
        })
    },

    save: (name, email, password, token, state_id) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO users (name, email, passwordHash, token, state_id) VALUES (?,?,?,?,?)`,
            [name, email, password, token, state_id], (error, results) => {
                if(error){ reject(error); return;}
                resolve(results.insertId)
            })
        })
    },

}

module.exports = User