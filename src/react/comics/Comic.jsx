var React = require('react');
const urlchecker = require('./urlchecker');

const Comic = React.createClass({

    getInitialState: function () {
        if (this.props.strip) {
            return { strip: this.props.strip, url: null }
        }
        return { strip: 1, url: null };
    },

    handleKeypress: function (evt) {
        if (this.state.strip) {
            var nextStrip = this.state.strip + 1;
            localStorage.setItem("comic-strip-status", nextStrip);
            this.setState({ strip: nextStrip, url: null });
        }
    },

    render: function () {
        var imageurl = "";
        if (!this.state.url) {
            imageurl = "http://www.questionablecontent.net/comics/" + this.state.strip + ".png";
            var that = this;
            urlchecker.isAlive(imageurl).then(function (result) {
                that.setState({ url: imageurl });
            }).catch(function (error) {
                imageurl = "http://www.questionablecontent.net/comics/" + that.state.strip + ".jpg";
                that.setState({ url: imageurl });
            });
        }

        return (
            <div>
                <img src={this.state.url} onClick={this.handleKeypress} height="100%" />
            </div>
        );
    }
});

module.exports = Comic;


function getUrlString(nbr) {

}