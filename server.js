const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const route = require('./routes')
let PORT = process.env.PORT || 2020;

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use('/assets', express.static(path.join(__dirname, './bower_components')))
app.use(route)

app.listen(PORT, () => {
	console.log('Connected on port', PORT)
})