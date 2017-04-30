function routeAdmin() {
	
	this.index = function(req, res) {
		res.render('admin/home')
	}

}
module.exports = routeAdmin