// Use resourcejs https://github.com/travist/resourcejs
var Resource = require('resourcejs');
module.exports = function (app, route) {

	// Setup the controller for REST;
	Resource(app, '', route, app.models.movie).rest();

	// Return middleware.
	return function (req, res, next) {
		next();
	};
};


// there is another framework to do the same thing node-restful

//var restful = require('node-restful');
//module.exports = function (app, route) {
//	//setup the controller for REST
//	var rest = restful.model('movie', app.models.movie)
//		 .methods(['get', 'put', 'post', 'delete']);
//
//	//Register this endpoint with the application
//	rest.register(app, route);
//
//	//Return middleware.
//	return function (req,res,next) {
//		next();
//	}
//};