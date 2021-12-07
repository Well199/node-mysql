const State = require('../services/State')

const UserController = {

    async getStates (req, res){

        let states = await State.find()

        res.json({states})
    },

    async info (req, res){

        res.json({})
    },

    async editAction (req, res){

        res.json({})
    }
}

module.exports = UserController