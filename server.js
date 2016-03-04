'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const ws = require('socket.io')(server)

const PORT = process.env.PORT || 3000

app.set('view engine', 'jade')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})

ws.on('connection', socket => {
  console.log('server socket connected', socket.id)

  socket.on('startGame', () => {
    socket.broadcast.emit('receiveStartGame', {started: true})
  })

  socket.on('moved', (info) => {
    socket.broadcast.emit('yourMove', info)
    console.log('info', info)
  })
})
