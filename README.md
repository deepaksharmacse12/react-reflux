# React-Reflux
React sample application using Reflux for data binding. React application lists the top 250 movies from IMDB.

## Component Structure
For the Movie List example, we'll have the following component structure:
```
- MovieList
  - Movie Table
    - Movie Row
```
## Reflux JS
A simple library for unidirectional dataflow architecture inspired by ReactJS [Flux](http://facebook.github.io/react/blog/2014/05/06/flux.html). Single data flow pattern is designed as :
```
╔═════════╗       ╔════════╗       ╔═════════════════╗
║ Actions ║──────>║ Stores ║──────>║ View Components ║
╚═════════╝       ╚════════╝       ╚═════════════════╝
     ^                                      │
     └──────────────────────────────────────┘

```
You can read more about [Reflux](https://github.com/reflux/refluxjs) from (https://github.com/reflux/refluxjs/blob/master/README.md)

## Action
Single movieListActions with `fetchList`: 
```javascript
var movieListActions = Reflux.createActions([
	'fetchList'
]);
```

## Store
```javascript
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
```

## Views
```javascript
var MovieListComponent = React.createClass({

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
```

## Installation

Install the node.js (https://nodejs.org/), In the root directory
`npm install`

For installing webpack: 
`npm install -g webpack`

## Usage

Switch to the root directory and run : 
`node server.js`

Browse to `http://localhost:8000/`

