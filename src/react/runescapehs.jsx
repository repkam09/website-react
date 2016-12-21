var React = require('react');
var RsSkillLine = require('./runescapeskill.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        return { skills: null, username: "repkam09", player: null };
    },

    componentDidMount: function () {
        // Get the URL params to check the username to load.
        var username = getParameterByName('user');
        if (username) {
            this.setState({ username });
        } else {
            username = this.state.username;
        }

        let that = this;
        getreq("https://api.repkam09.com/api/runescape/rs3/current/" + username + "/json").then((response) => {
            var stats = JSON.parse(response);
            that.setState({ skills: stats.skills, player: stats.player });
        });
    },

    render: function () {
        if (this.state.skills && this.state.player) {

            let skillarray = [];
            for (var key in this.state.skills) {
                if (this.state.skills.hasOwnProperty(key)) {
                    var obj = this.state.skills[key];
                    obj.name = key;
                    skillarray.push(obj);
                }
            }

            let skilllist = skillarray.map((skill) => {
                return (
                    <RsSkillLine data={skill} />
                );
            });

            return (
                <div className="rs-hs-main">
                    <div className="rs-hs-player">
                        <h1 className="rs-hs-player-name">{this.state.player.name}</h1>
                        <img src={"https://api.repkam09.com" + this.state.player.avatar} />
                    </div>
                    <br />
                    <div className="rs-hs-skillwrapper" >
                        {skilllist}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="runescape-hs">
                    <p>Loading RuneScape Highscores for {this.state.username} </p>
                </div>
            );
        }
    }
});


function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}