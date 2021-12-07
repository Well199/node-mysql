require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(fileUpload())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    server.use(cors())
    next()
})

server.use(express.static(__dirname+'/public'))

server.get('/ping', (req, res) => {
    res.json({pong: true})
})

server.use((req, res) => {
    res.status(404)
    res.json({status: 404, message: "url não encontrada"})
})

server.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})
