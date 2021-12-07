const User = require('../services/User')

const Auth = {
    private: async (req, res, next) => {

        if(!req.query.token && !req.body.token){
            res.json({message: "Token não enviado"})
            return
        }

        let token = ''

        if(req.query.token){
            token = req.query.token
        }
        if(req.body.token){
            token = req.body.token
        }

        if(token == ''){
            res.json({message: "Token invalido"})
            return
        }

        const user = await User.findToken(token)

        if(!user){
            res.json({message: "usuario não encontrado"})
            return
        }

        next()

    }
}

module.exports = Auth