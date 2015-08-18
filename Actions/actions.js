var exports = module.exports;
var Reflux = require("reflux");

var movieListActions = Reflux.createActions([
	'fetchList'
]);
exports.movieListActions = movieListActions;