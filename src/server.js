const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const UserController = require('./controllers/UserController')

app.get('/users', UserController.list)

app.post('/users', UserController.create)

app.put('/users/:id', UserController.update)

app.listen(port)