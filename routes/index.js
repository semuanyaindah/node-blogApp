const express = require('express')
const router = express.Router()

const routeUser = require('./user')
let user = new routeUser()

const routeAdmin = require('./admin')
let admin = new routeAdmin()
	
router.get('/', user.index)

router.get('/admin', admin.index)

module.exports = router;