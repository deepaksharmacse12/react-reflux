var exports = module.exports;
var MovieRow = require("./MovieRowComponent").MovieRow;
require("./MovieListComponent.css");


var MovieTable = React.createClass({
	render : function(){
		return(
			<ul className = "collection no-border">
				{this.props.movieList.map(function(movie){
					return <MovieRow movie = {movie}/>;
				})}
			</ul>
		)
	}
})
exports.MovieTable = MovieTable; 