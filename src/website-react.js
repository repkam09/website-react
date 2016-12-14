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


const header = React.createElement(require("./react/header"));
const footer = React.createElement(require("./react/footer"));

// These should always exist on every page
ReactDOM.render(header, document.getElementById("header-wrapper"));
ReactDOM.render(footer, document.getElementById("footer-wrapper"));

// These should only be loaded if we are on a page that uses them
var elementReactApi = document.getElementById("react-api");
if (elementReactApi) {
    const apilist = React.createElement(require("./react/apilist"));
    ReactDOM.render(apilist, elementReactApi);
}

var elementMusicData = document.getElementById("music-data");
if (elementMusicData) {
    const musicdata = React.createElement(require("./react/musicdata"));
    ReactDOM.render(musicdata, elementMusicData);
}

var elementLoginPage = document.getElementById("login-page");
if (elementLoginPage) {
    const loginpage = React.createElement(require("./react/login/loginpage"));
    ReactDOM.render(loginpage, elementLoginPage);
}

var elementSongCounter = document.getElementById("song-counter");
if (elementSongCounter) {
    const songcounter = React.createElement(require("./react/songcounter"));
    ReactDOM.render(songcounter, elementSongCounter);
}