require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

//Endpoints
app.get('/api/deli', ctrl.stockDeli)
app.post('/api/deli', ctrl.addChz)
app.get('/api/chzBoard', ctrl.chzboard)
app.delete('/api/chzBoard', ctrl.removeChz)
app.put('/api/chzBoard', ctrl.occasion)


app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))