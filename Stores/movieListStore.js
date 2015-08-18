var exports = module.exports;
var Reflux = require("reflux");
var $ = require('jquery');

var movieListActions = require("../Actions/actions.js").movieListActions;
var moviesJson = require("../output.js").moviesJson;

var movieListStore = Reflux.createStore({
	listenables : [movieListActions],
	movieList : [],
	sourceUrl : '/scrape',

	// init function is called by default in the starting
	init: function(){

	},

	// this will be called by all listening components as they register
	// their listeners i.e. reflux.connect reference
	getInitialState: function(){
		this.movieList = moviesJson.movies;
		return this.movieList;
	},

	// function corresponding to fetchList action method
	onFetchList : function(){

	}
});

exports.movieListStore = movieListStore;