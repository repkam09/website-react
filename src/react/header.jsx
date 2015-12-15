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
			<div id="header" className="container">
				<div id="logo">
					<h1><a href="#">Mark Repka</a></h1>
				</div>
				<div id="menu">
					<ul>
						<li className="current_page_item"><a href="#" accesskey="1" title="">Home</a></li>
						<li><a href="/blog/" accesskey="2" title="">Blog</a></li>
						<li><a href="/about/" accesskey="3" title="">About</a></li>
						<li><a href="/contact/" accesskey="4" title="">Contact</a></li>
						<li><a href="/resume.pdf" accesskey="5" title="">Résumé</a></li>
					</ul>
				</div>
			</div>
		);
	}
});