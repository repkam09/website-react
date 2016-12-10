const React = require('react');
const Comic = require('./Comic.jsx');

module.exports = React.createClass({

    getInitialState: function () {
        var progress = localStorage.getItem("comic-strip-status");
        if (progress) {
            return { progress };
        } else {
            return { progress: 0 };
        }
    },

    render: function () {
        var parse = parseInt(this.state.progress);
        return (
            <div>
                <Comic name='qc' strip={parse} />
            </div>
        );
    }
});