const StateService = require('../services/stateService')

const UserController = {

    async getStates (req, res){

        let states = await StateService.find()

        res.json({result: states})
    },

    async info (req, res){

        res.json({})
    },

    async editAction (req, res){

        res.json({})
    }
}

module.exports = UserController