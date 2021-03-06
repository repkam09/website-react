var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return { };
	},

	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
	},

	render: function() {
		return (
			<p>&copy; Mark Repka. All rights reserved. | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. | <a href="https://github.com/repkam09/website-react">View Source on GitHub</a>.</p>
		);
	}
});