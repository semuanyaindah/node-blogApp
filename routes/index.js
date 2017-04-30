const express = require('express')
const router = express.Router()

const routeUser = require('./user')
let user = new routeUser()
	
router.get('/', user.index)

module.exports = router;