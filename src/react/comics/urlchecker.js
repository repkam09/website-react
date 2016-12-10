

const urlchecker = {
    isAlive: function (someurl) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('HEAD', someurl, true);
            request.onreadystatechange = function () {
                if (request.readyState === 2) {
                    if (request.status != 404) {
                        resolve(request);
                    } else {
                        reject(request);
                    }
                }
            };

            request.send();
        });
    }

}

module.exports = urlchecker;