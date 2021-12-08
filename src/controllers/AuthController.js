const { validationResult, matchedData } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../services/User')
const State = require('../services/State')

const AuthController = {

    async signin (req, res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()})
            return
        }
        const data = matchedData(req)

        const user = await User.findEmail(data.email)
        if(!user){
            res.json({error: 'Email /ou senha inválidos'})
            return
        }

        let password = data.password.toString()

        // validando a senha
        const match = await bcrypt.compare(password, user.passwordHash)
        if(!match){
            res.json({error: 'Email /ou senha inválidos'})
            return
        }

        const payload = (Date.now() + Math.random()).toString()
        const token = await bcrypt.hash(payload, 10)

        await User.setToken(token, user.id)

        res.json({token: token})
    },

    async signup (req, res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.json({error: errors.mapped()})
            return
        }

        const data = matchedData(req)

        const user = await User.findEmail(data.email)
        if(user){
            res.json({error: "E-mail já existe"})
            return
        }

        const state = await State.findById(data.state)
        if(!state){
            res.json({error: "Código de estado inválido"})
            return
        }

        let password = data.password.toString()

        const passwordHash = await bcrypt.hash(password, 10)

        const payload = (Date.now() + Math.random()).toString()
        const token = await bcrypt.hash(payload, 10)

        const newUser = await User.save(data.name, data.email, passwordHash, token, state.id)

        res.json({id: newUser, token: token})
    }

}

module.exports = AuthController