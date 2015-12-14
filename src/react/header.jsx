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
					<h1><a href="#">repkam09.com</a></h1>
				</div>
				<div id="menu">
					<ul>
						<li className="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
						<li><a href="#" accesskey="2" title="">Our Clients</a></li>
						<li><a href="#" accesskey="3" title="">About Us</a></li>
						<li><a href="#" accesskey="4" title="">Careers</a></li>
						<li><a href="#" accesskey="5" title="">Contact Us</a></li>
					</ul>
				</div>
			</div>
		);
	}
});