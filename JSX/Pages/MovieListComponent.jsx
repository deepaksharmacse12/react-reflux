var Reflux = require("reflux");

var moviesJson = require("../../output.js").moviesJson;
var MovieTable = require("./MovieTableComponent").MovieTable;

var movieListActions = require("../../Actions/actions.js").movieListActions;
var movieListStore = require("../../Stores/movieListStore.js").movieListStore;

var MovieListComponent = React.createClass({
	
	//this will cause setState({moviesList:updatedList}) whenever the store
	//does trigger(updatedlist)
	mixins : [Reflux.connect(movieListStore, 'movieList')],

	render : function(){		
		return (
			<div className = "row">
				<div className = "col s12">
					<h2>Movie Lists</h2>
					<MovieTable movieList = {this.state.movieList}/>
				</div>
			</div>
		)
	}
});

React.render(<MovieListComponent/>, 
	document.getElementById('content'));