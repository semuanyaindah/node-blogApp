function routeUser() {
	
	this.index = function(req, res) {
		res.render('user/home')
	}

}
module.exports = routeUser