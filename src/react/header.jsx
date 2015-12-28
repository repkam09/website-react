var React = require('react');

// Different text to display as a tagline in the header
var textblocks = ["Software Engineer, RIT Student",
                  "JavaScript and ReactJS Programmer",
                  "Long time Linux user",
                  "Minecraft and RuneScape Player",
                  "Raspberry Pi enthusiast"];
var timer = null;

module.exports = React.createClass({
	getInitialState: function() {
		return {swapcount: 0 };
	},

	componentWillMount: function(){
		// Do something when the react component is about to be displayed for the first time
	},

	componentDidMount: function() {
		// Do something when the react component is first drawn to the screen
        var that = this;
        timer = setInterval(function() {
            var tempcount = that.state.swapcount;
            
            tempcount = (tempcount + 1);
            if (tempcount >= textblocks.length) {
                tempcount = 0;
            }
            
            that.setState({swapcount: tempcount});
            
        }, 3000);
	},

	componentWillUnmount: function() {
		// Do something when the react component is no longer needed
        clearInterval(timer);
	},

	render: function() {
        var swaptext = textblocks[this.state.swapcount];
                
		return (
			<div id="header" className="container">
				<div id="logo">
					<h1><a href="#">Mark Repka</a></h1>
                    <p>{swaptext}</p>
				</div>
				<div id="menu">
					<ul>
						<li className="current_page_item"><a href="#" accessKey="1" title="">Home</a></li>
						<li><a href="#" accessKey="2" title="">Blog</a></li>
						<li><a href="#" accessKey="3" title="">About</a></li>
						<li><a href="#" accessKey="4" title="">Contact</a></li>
						<li><a href="#" accessKey="5" title="">Résumé</a></li>
					</ul>
				</div>
			</div>
		);
	}
});