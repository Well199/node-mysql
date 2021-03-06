const { checkSchema } = require('express-validator')

const AuthValidator = {

    signup: checkSchema({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            isEmail: true,
            normalizeEmail: false,
            errorMessage: 'E-mail inválido'
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: {
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    }),
    signin: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: false,
            errorMessage: 'E-mail /ou senha inválidos'
        },
        password: {
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'E-mail /ou senha inválidos'
        },
    })
}

module.exports = AuthValidator