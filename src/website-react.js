var ReactDOM = require("react-dom");
var React = require("react");

var header = React.createElement(require("./react/header"));
var footer = React.createElement(require("./react/footer"));
var musicdata = React.createElement(require("./react/musicdata"));
var apilist = React.createElement(require("./react/apilist"));

// These should always exist on every page
ReactDOM.render(header, document.getElementById("header-wrapper"));
ReactDOM.render(footer, document.getElementById("footer-wrapper"));

// These should only be loaded if we are on a page that uses them
if (document.getElementById("react-api")) {
    ReactDOM.render(apilist, document.getElementById("react-api"));
}

if (document.getElementById("music-data")) {
    ReactDOM.render(musicdata, document.getElementById("music-data"));
}