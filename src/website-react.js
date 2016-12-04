var ReactDOM = require("react-dom");
var React = require("react");


/**
 * Set up some helper functions that various pages use later
 */
window.postreq = function (url, body) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        var sendbody = body;
        xmlhttp.open("POST", url, true);

        let bodytype = typeof body;
        switch (bodytype) {
            case "object": {
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                sendbody = JSON.stringify(body);
                break;
            }

            case "string": {
                xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                sendbody = body;
                break;
            }

            default: {
                xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            }
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status);
                }
            }
        }

        xmlhttp.send(sendbody);
    });
}

window.getreq = function (url) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status);
                }
            }
        }
        xmlhttp.send();
    });
}


var header = React.createElement(require("./react/header"));
var footer = React.createElement(require("./react/footer"));
var musicdata = React.createElement(require("./react/musicdata"));
var apilist = React.createElement(require("./react/apilist"));
var loginpage = React.createElement(require("./react/login/loginpage"));
var songcounter = React.createElement(require("./react/songcounter"));

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

if (document.getElementById("login-page")) {
    ReactDOM.render(loginpage, document.getElementById("login-page"));
}

if (document.getElementById("song-counter")) {
    ReactDOM.render(songcounter, document.getElementById("song-counter"));
}