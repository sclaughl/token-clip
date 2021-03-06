(function() {
    var TOKEN_KEY = 'access_token';

    function contains(string, searchString) {
        return string.indexOf(searchString) !== -1;
    }

    function getTokenValue(url, key) {
        var idxStart = url.indexOf(key) + key.length + 1;
        var idxEnd = url.indexOf('&', idxStart);
        var token = url.substring(idxStart,idxEnd);
        return token;
    }

    function copyToClipboard(prmpt, text) {
        window.prompt(prmpt, text);
    }

    var url = window.location.href;
    if (contains(url, TOKEN_KEY)) {
        var token = getTokenValue(url, TOKEN_KEY);
        copyToClipboard('token: ', token);
    }

})();

