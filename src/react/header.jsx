var React = require('react');

// Different text to display as a tagline in the header
var textblocks = ["Software Engineer, RIT Student",
                  "JavaScript and ReactJS Programmer",
                  "Experienced Linux User",
                  "Minecraft Server Admin",
                  "Raspberry Pi Enthusiast"];
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
        
        
        // Create an array that represents the nav bar
        var navbar = [];
        navbar.push({key: 1, link: "/", text:"Home"});
        navbar.push({key: 2, link: "/blog/", text:"Blog"});
        navbar.push({key: 3, link: "/about/", text:"About"});
        navbar.push({key: 4, link: "/contact/", text:"Contact"});
        navbar.push({key: 5, link: "/files/resume.pdf", text:"Résumé"});
        
        var menubar = navbar.map(function(option) {
           var currentLocation = window.location.pathname;

           // Do some magic to highlight the current page
           var classAddName = "";
           if (option.link === currentLocation) {
               classAddName = "current_page_item";
           }

           return (
               <li key={option.key} className={classAddName} ><a href={option.link} accessKey={option.key} title="">{option.text}</a></li>
           );
        });
        

		return (
			<div id="header" className="container">
				<div id="logo">
					<h1><a href="#">Mark Repka</a></h1>
                    <p>{swaptext}</p>
				</div>
				<div id="menu">
					<ul>
						{menubar}
					</ul>
				</div>
			</div>
		);
	}
});