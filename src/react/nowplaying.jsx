var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return { hasMusicData: false };
    },

    componentDidMount: function () {
        var that = this;
        getreq("https://api.repkam09.com/api/music/now/repkam09").then((response) => {
            var nowplaying = JSON.parse(response);
            var list = nowplaying.recenttracks.track;
            var current = 0;
            list.forEach((track) => {
                if (track["@attr"]) {
                    if (track["@attr"].nowplaying) {
                        current = track;
                    }
                }
            });

            var newurl = current.image[3]["#text"];
            if (newurl === "") {
                newurl = "/img/albumart.jpg";
            }

            var newstate = {
                "trackname": current.name, "artistname": current.artist["#text"],
                "albumname": current.album["#text"], "albumimage": newurl, "hasMusicData": true
            };

            console.log(JSON.stringify(newstate));

            that.setState(newstate);
        });
    },

    render: function () {
        if (this.state.hasMusicData) {

            var albumart = null;
            if (this.state.albumimage) {
                albumart = (
                    <img src={this.state.albumimage} width="100" height="100"></img>
                );
            }

            return (
                <div className="music-wrapper">
                    <p><b>{this.state.trackname}</b> by <b>{this.state.artistname}</b> off the album <b>{this.state.albumname}</b></p>
                    {albumart}
                </div>
            );
        } else {
            return (
                <div><p>Loading...</p></div>
            );
        }
    }
});