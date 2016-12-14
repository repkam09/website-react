var React = require('react');

// Different text to display as a tagline in the header
var textblocks =
    ["Software Engineer, RIT Alumni",
        "JavaScript/Node Programmer",
        "Casual RuneScape Player",
        "RITLug/FOSS@MAGIC Member",
        "Casual Minecraft Player",
        "Runs Linux On Everything",
        "Raspberry Pi Enthusiast"];
var timer = null;

module.exports = React.createClass({
    getInitialState: function () {
        return { swapcount: 0 };
    },

    componentWillMount: function () {
        // Do something when the react component is about to be displayed for the first time
    },

    componentDidMount: function () {
        var that = this;

        if (window.location.hostname !== "localhost") {
            // Load Google Analytics only if not debug
            window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
            ga('create', 'UA-11568772-3', 'auto');
            ga('send', 'pageview');

            // Get the current page from the window location
            var pagename = window.location.pathname;


            pagename = pagename.replace(new RegExp("/", 'g'), "");

            if (pagename === "") {
                pagename = "home";
            }

            console.log("The " + pagename + " page has been loaded");
            // Eventually log the current page maybe. But this API isnt ready yet.
            getreq("https://api.repkam09.com/api/lifeforce/analytics/site_" + pagename).then((response) => {
                // Logging worked
            }).catch((error) => {
                // Logging failed, but we dont care!
            });
        } else {
            console.log("Analytics skipped because this appears to be a development build");
        }

        // Do something when the react component is first drawn to the screen

        timer = setInterval(function () {
            var tempcount = that.state.swapcount;

            tempcount = (tempcount + 1);
            if (tempcount >= textblocks.length) {
                tempcount = 0;
            }

            that.setState({ swapcount: tempcount });

        }, 3000);
    },

    componentWillUnmount: function () {
        // Do something when the react component is no longer needed
        clearInterval(timer);
    },

    render: function () {
        var swaptext = textblocks[this.state.swapcount];


        // Create an array that represents the nav bar
        var navbar = [];
        navbar.push({ key: 1, link: "/", text: "Home" });
        navbar.push({ key: 2, link: "https://nuc.repkam09.com/", text: "NUC" });
        navbar.push({ key: 3, link: "/about/", text: "About" });
        navbar.push({ key: 4, link: "/contact/", text: "Contact" });
        navbar.push({ key: 5, link: "/files/resume.pdf", text: "Résumé" });

        var menubar = navbar.map(function (option) {
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
                    <h1><a href="/">Mark Repka</a></h1>
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