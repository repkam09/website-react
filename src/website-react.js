var ReactDOM = require('react-dom');
var React = require('react');

var header = React.createElement(require('./react/header'));
var footer = React.createElement(require('./react/footer'));

ReactDOM.render(header, document.getElementById('header-wrapper'));
ReactDOM.render(footer, document.getElementById('footer-wrapper'));