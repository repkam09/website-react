var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        var starttime = new Date();
        return { elapsed: 0, start: starttime };
    },

    componentDidMount: function () {
        this.timer = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },

    tick: function () {
        this.setState({ elapsed: new Date() - this.state.start });
    },

    render: function () {

        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(0);

        return (
            <div className="song-counter">
                <p>You have been borking for <b>{seconds} borks!</b>.</p>
            </div>
        );
    }
});